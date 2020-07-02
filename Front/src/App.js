import React, { useEffect } from "react";
import { initializeItems } from "./reducers/items";
import { useDispatch } from "react-redux";
import Items from "./components/Items";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  // Fetching data
  useEffect(() => {
    dispatch(initializeItems());
  }, [dispatch]);

  return (
    <div className="App">
      Hello World!!
      <Items />
    </div>
  );
};

export default App;
