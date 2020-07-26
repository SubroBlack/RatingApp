import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getItem, editItem } from "../reducers/items";

const EditItemForm = () => {
  // Login Form input
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

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
    <div>
      <h5>Editing {item.name}</h5>

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
        <input type="submit" />
        <br />
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditItemForm;
