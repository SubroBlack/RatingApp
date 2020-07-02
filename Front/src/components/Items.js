import React from "react";
import { useSelector } from "react-redux";

const Items = () => {
  // Main Items to be reviewed
  const items = useSelector((state) => state.items);

  if (!items) {
    return null;
  }

  console.log("Items: ", items);

  const show = () => {
    return items.map((item) => (
      <div key={item.id}>
        <b>{item.name}</b>
        <h3>{item.category}</h3>
      </div>
    ));
  };

  return <div>{show()}</div>;
};

export default Items;
