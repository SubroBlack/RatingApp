import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allItems } from "../reducers/items";
import Item from "./Item";

import Carousel from "./Carousel";

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
  console.log("Items: ", items);

  const openItem = (item) => {
    logged.role === "admin"
      ? setSingleItem(item)
      : console.log("Not Authorized");
  };

  const show = () => {
    if (items.length < 1) {
      return null;
    }
    if (singleItem) {
      return <Item item={singleItem} clear={setSingleItem} />;
    }
    return <Carousel items={items} open={openItem} />;
  };

  return <div>{show()}</div>;
};

export default Items;
