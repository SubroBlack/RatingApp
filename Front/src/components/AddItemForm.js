import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItem } from "../reducers/items";
import { TextField, Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderStyle: "solid",
    borderRadius: "1%",
    borderWidth: "4px",
    margin: "2%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  header: {
    textAlign: "center",
  },
  form: {
    display: "grid",
    width: "25vmax",
    margin: "auto",
  },
  image: {
    width: "25vmax",
    height: "auto",
    alignSelf: "center",
    justifyself: "center",
    //margin: "auto",
  },
});

const AddItemForm = () => {
  // Login Form input
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImage, setUploadedImage] = useState({});

  const classes = useStyles();

  // useDispatch hook to dispatch the Action
  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // useHistory to redirect
  const history = useHistory();

  if (!logged) {
    return <h5>Sign In</h5>;
  } else if (logged.role !== "admin") {
    return <h5>Sign In to Admin mode</h5>;
  }

  // Submit the Add Item Form
  const submit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("file", uploadedImage);
    //await dispatch(addItem({ name, category, description }));
    await dispatch(addItem(formData));
    // Clearing the Form
    setName("");
    setCategory("");
    setDescription("");
    setUploadedImage({});
    setUploadedImageUrl("");
    history.push("/");
  };

  // Cancel the add Item process
  const cancel = (event) => {
    event.preventDefault();
    history.push("/dashboard");
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>Add New Service</h3>
      <form onSubmit={submit} className={classes.form}>
        <TextField
          required
          id="outlined-required"
          label="Title"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          variant="outlined"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          name="category"
          label="Category"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          variant="outlined"
        />
        <br />
        <TextField
          required
          id="outlined-multiline-flexible"
          name="description"
          label="Description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          variant="outlined"
        />
        <br />
        <Input
          id="raised-button-file"
          type="file"
          name="image"
          color="primary"
          onChange={(event) => {
            setUploadedImageUrl(URL.createObjectURL(event.target.files[0]));
            setUploadedImage(event.target.files[0]);
          }}
        />
        <br />
        {!uploadedImageUrl.trim() ? null : (
          <img
            src={!uploadedImageUrl.trim() ? null : uploadedImageUrl}
            alt="upload"
            className={classes.image}
          />
        )}
        <br />
        <Button type="submit" color="primary">
          Submit
        </Button>
        <br />
        <Button onClick={cancel} color="secondary">
          Cancel
        </Button>
      </form>
      <br />
    </div>
  );
};

export default AddItemForm;
