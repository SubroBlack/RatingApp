import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allItems } from "../reducers/items";
import Item from "./Item";
const imgUrl = "/api/items/image/";

const Items = () => {
  const [singleItem, setSingleItem] = useState(null);

  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // Fetching data according the role of user signed in
  useEffect(() => {
    dispatch(allItems());
  }, [logged, dispatch]);

  // Main Items to be reviewed
  const items = useSelector((state) => state.items);

  if (!items) {
    return null;
  }

  const openItem = (item) => {
    logged.role === "admin"
      ? setSingleItem(item)
      : console.log("Not Authorized");
  };

  console.log("Items: ", items);

  const show = () => {
    if (singleItem) {
      return (
        <>
          <Item item={singleItem} clear={setSingleItem} />
          <button
            onClick={() => {
              openItem(null);
            }}
          >
            Cancel
          </button>
        </>
      );
    } else {
      return items.map((item) => (
        <div key={item.id}>
          <h3 onClick={() => openItem(item)}> {item.name}</h3>
          <img src={imgUrl + item.filename} alt={item.name} />
          <br />
          <b>{item.category}</b>
          <p>{item.review ? "Reviews stack returned " : "No Review Array"}</p>
        </div>
      ));
    }
  };

  return <div>{show()}</div>;
};

export default Items;
