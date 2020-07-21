import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { initializeItems } from "./reducers/items";
import { useDispatch, useSelector } from "react-redux";
import Items from "./components/Items";
import Item from "./components/Item";
import "./App.css";
import Auth from "./components/Auth";
import { setLoggedUser } from "./reducers/login";

const App = () => {
  const dispatch = useDispatch();

  // Fetching data
  useEffect(() => {
    dispatch(initializeItems());
  }, [dispatch]);

  // Setting up Logged In User
  useEffect(() => {
    dispatch(setLoggedUser());
  }, [dispatch]);

  // Logged in User
  const logged = useSelector((state) => state.logged);
  console.log("APP Logged: ", logged);

  return (
    <div className="App">
      Hello World!!
      <Switch>
        <Route path="/items/:id">
          <Item />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Items />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
