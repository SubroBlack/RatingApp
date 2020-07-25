import React from "react";
import { useHistory } from "react-router";

const Item = (props) => {
  const history = useHistory();
  const item = props.item;

  const editItem = () => {
    history.push(`/edit/${item.id}`);
  };

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
        <button onClick={editItem}>Edit</button>
      </div>
    );
  };

  return <div>{show()}</div>;
};

export default Item;
