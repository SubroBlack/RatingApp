import React, { useState, useEffect } from "react";
import axios from "axios";

const Items = () => {
  // Main Items to be reviewed
  const [items, setItems] = useState("");

  // Fetching data
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/items")
      .then((items) => setItems(items.data));
  }, []);

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
