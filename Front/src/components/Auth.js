import React from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import { logOut, AdminLogOut } from "../reducers/login.js";
import { useDispatch, useSelector } from "react-redux";
import AdminLoginForm from "./AdminLoginForm";

const Auth = () => {
  // Using History to redirect
  const history = useHistory();
  // To dispatch events
  const dispatch = useDispatch();
  // useSelector to fetch data
  const loggedUser = useSelector((state) => state.logged);

  // Logout function
  const signout = (event) => {
    event.preventDefault();
    dispatch(logOut());
  };

  // User Sign OUt button
  const signOutButton = () => {
    return <button onClick={signout}>Logout</button>;
  };

  // Handle Admin switch to User
  const switchToUser = (event) => {
    event.preventDefault();
    dispatch(AdminLogOut());
    history.push("/");
  };

  // Check if the user is signedin or admin mode is on
  const display = () => {
    if (!loggedUser) {
      return (
        <div>
          <LoginForm />
        </div>
      );
    } else if (loggedUser.role === "user") {
      return (
        <div>
          <AdminLoginForm />
          {signOutButton()}
        </div>
      );
    } else if (loggedUser.role === "admin") {
      return (
        <div>
          <button onClick={switchToUser}>User Mode</button>
          {signOutButton()}
        </div>
      );
    }
  };

  return <div>{display()}</div>;
};

export default Auth;
