import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Item = () => {
  // Main Items to be reviewed
  const items = useSelector((state) => state.items);
  // Item to be shown
  const itemId = useParams().id;
  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return null;
  }

  console.log("Item: ", item);

  const show = () => {
    return (
      <div key={item.id}>
        <h3>Details</h3>
        <b>{item.name}</b>
        <h3>Category: {item.category}</h3>
        <p>{item.description}</p>
      </div>
    );
  };

  return <div>{show()}</div>;
};

export default Item;
