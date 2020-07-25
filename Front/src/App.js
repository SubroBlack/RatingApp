import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Items from "./components/Items";
import "./App.css";
import Auth from "./components/Auth";
import { setLoggedUser } from "./reducers/login";
import LoginForm from "./components/LoginForm";
import AddItemForm from "./components/AddItemForm";
import DashBoard from "./components/dashboard";
import EditItemForm from "./components/EditItemForm";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Setting up Logged In User
  useEffect(() => {
    dispatch(setLoggedUser());
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
        <Route path="/addItem/">
          <AddItemForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/edit/:id">
          <EditItemForm />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/">
          <Items />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
