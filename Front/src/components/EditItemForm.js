import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getItem, editItem } from "../reducers/items";
import { TextField, Button } from "@material-ui/core";
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

const EditItemForm = () => {
  // Login Form input
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const classes = useStyles();

  // useHistory to redirect
  const history = useHistory();
  const itemId = useParams().id;

  // useDispatch hook to dispatch the Action
  const dispatch = useDispatch();
  // Logged in User
  const logged = useSelector((state) => state.logged);

  // The Item being edited
  useEffect(() => {
    dispatch(getItem(itemId));
  }, [dispatch, itemId, logged]);

  // The item
  const item = useSelector((state) => state.items)[0];

  if (!logged) {
    return <h5>Sign In</h5>;
  } else if (logged.role !== "admin") {
    return <h5>Sign In to Admin mode</h5>;
  }

  if (!item) {
    return null;
  }

  console.log("edit item form: ", item);

  // Submit the Add Item Form
  const submit = async (event) => {
    event.preventDefault();
    const editedItem = {
      name: name === "" ? item.name : name,
      category: category === "" ? item.category : category,
      description: description === "" ? item.description : description,
      //review: item.review,
      //user: item.user,
    };

    await dispatch(editItem(item.id, editedItem));
    // Clearing the Login Form
    setName("");
    setCategory("");
    setDescription("");
    history.push("/");
  };

  // Cancel the add Item process
  const cancel = (event) => {
    event.preventDefault();
    history.push("/dashboard");
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>Editing {item.name}</h3>
      <br />
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
          id="outlined-multiline-flexible"
          rowsMax="4"
          name="description"
          label="Description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          variant="outlined"
        />
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

export default EditItemForm;
