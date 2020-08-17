import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItem } from "../reducers/items";

const AddItemForm = () => {
  // Login Form input
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImage, setUploadedImage] = useState({});

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
    <div>
      <h5>Add New Service</h5>
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          placeholder="Title"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <br />
        <input
          type="file"
          name="image"
          onChange={(event) => {
            setUploadedImageUrl(URL.createObjectURL(event.target.files[0]));
            setUploadedImage(event.target.files[0]);
          }}
        />
        <br />
        <img
          src={!uploadedImageUrl.trim() ? null : uploadedImageUrl}
          alt="upload"
        />
        <br />
        <input type="submit" />
        <br />
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddItemForm;
