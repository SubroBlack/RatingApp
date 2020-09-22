import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { allItems } from "../reducers/items";

import Carousel from "./Carousel";

const Home = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // Fetching data according the role of user signed in
  useEffect(() => {
    dispatch(allItems());
  }, [logged, dispatch]);

  // Main Items to be reviewed
  const items = useSelector((state) => state.items);

  const openItem = (item) => {
    logged.role === "admin"
      ? history.push(`/items/${item.id}`)
      : console.log("Not Authorized");
  };

  const show = () => {
    if (items.length < 1) {
      return null;
    }
    return <Carousel items={items} open={openItem} />;
  };

  return <div>{show()}</div>;
};

export default Home;
