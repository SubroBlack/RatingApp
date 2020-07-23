import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { initializeItems } from "../reducers/items";

const Items = () => {
  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // Fetching data according the role of user signed in
  useEffect(() => {
    dispatch(initializeItems());
  }, [logged, dispatch]);

  // Main Items to be reviewed
  const items = useSelector((state) => state.items);

  if (!items) {
    return null;
  }

  console.log("Items: ", items);

  const show = () => {
    return items.map((item) => (
      <div key={item.id}>
        <Link to={`/items/${item.id}`}>
          <b> {item.name}</b>
        </Link>
        <h3>{item.category}</h3>
        <p>{item.review ? "Reviews stack returned " : "No Review Array"}</p>
      </div>
    ));
  };

  return <div>{show()}</div>;
};

export default Items;
