import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { initializeItems } from "./reducers/items";
import { useDispatch } from "react-redux";
import Items from "./components/Items";
import Item from "./components/Item";
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
      <Switch>
        <Route path="/items/:id">
          <Item />
        </Route>
        <Route path="/">
          <Items />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
