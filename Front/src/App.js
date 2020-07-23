import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Items from "./components/Items";
import Item from "./components/Item";
import "./App.css";
import Auth from "./components/Auth";
import { setLoggedUser } from "./reducers/login";
import LoginForm from "./components/LoginForm";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Setting up Logged In User
  useEffect(() => {
    console.log("Setting Logged: ");
    dispatch(setLoggedUser());
    console.log("Logged Set: ");
  }, [dispatch]);

  // Logged in User
  const logged = useSelector((state) => state.logged);
  console.log("APP Logged: ", logged);

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <div className="App">
      <h2 onClick={gotoHome}>Rating App</h2>
      <Auth />
      <Switch>
        <Route path="/items/:id">
          <Item />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <Items />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
