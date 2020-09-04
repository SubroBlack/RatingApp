import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { deleteItem } from "../reducers/items";

const Item = ({ item, clear }) => {
  // Dispatch
  const dispatch = useDispatch();

  const history = useHistory();

  // GOto Edit Item form
  const editItem = () => {
    history.push(`/edit/${item.id}`);
  };

  // Delete the current Item
  const removeItem = async () => {
    dispatch(deleteItem(item));
    clear();
  };

  if (!item) {
    return null;
  }

  console.log("Item: ", item);

  const show = () => {
    return (
      <div key={item.id}>
        <h4>Details</h4>
        <b>{item.name}</b>
        <h5>Category: {item.category}</h5>
        <b>{item.posted}</b>
        <p>{item.description}</p>
        <button onClick={editItem}>Edit</button>
        <button onClick={removeItem}>Delete</button>
        <button
          onClick={() => {
            clear();
          }}
        >
          Cancel
        </button>
      </div>
    );
  };

  return <div>{show()}</div>;
};

export default Item;
