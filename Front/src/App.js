import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import Item from "./components/Item";
import "./App.css";
import { setLoggedUser } from "./reducers/login";
import LoginForm from "./components/LoginForm";
import AddItemForm from "./components/AddItemForm";
import DashBoard from "./components/Dashboard";
import EditItemForm from "./components/EditItemForm";
import JoinForm from "./components/JoinForm";
import EditUserForm from "./components/EditUserForm";
import Notification from "./components/Notification";
import AppMenu from "./components/AppMenu";

// Material UI
import { Container } from "@material-ui/core";

const App = () => {
  const dispatch = useDispatch();

  // Setting up Logged In User
  useEffect(() => {
    dispatch(setLoggedUser());
  }, [dispatch]);

  // Logged in User
  const logged = useSelector((state) => state.logged);
  console.log("Logged User: ", logged);

  return (
    <div className="App">
      <AppMenu />
      <Container maxWidth={false} className="Content">
        <Notification />
        <Switch>
          <Route path="/addItem/">
            <AddItemForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/join">
            <JoinForm />
          </Route>
          <Route path="/edit/:id">
            <EditItemForm />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/editUser">
            <EditUserForm />
          </Route>
          <Route path="/items/:id">
            <Item />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
