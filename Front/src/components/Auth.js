import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { logOut, AdminLogOut } from "../reducers/login.js";
import { useDispatch, useSelector } from "react-redux";
import AdminLoginForm from "./AdminLoginForm";

import { Button } from "@material-ui/core";

const Auth = () => {
  // Using History to redirect
  const history = useHistory();
  // To dispatch events
  const dispatch = useDispatch();
  // useSelector to fetch data
  const loggedUser = useSelector((state) => state.logged);

  const [form, setForm] = useState(false);

  // Logout function
  const signout = async (event) => {
    event.preventDefault();
    await dispatch(AdminLogOut());
    await dispatch(logOut());
    setForm(false);
    history.push("/");
  };

  // User Login Form button
  const loginFormButton = () => {
    history.push("/login");
  };

  // Handle Admin switch to User
  const switchToUser = (event) => {
    event.preventDefault();
    dispatch(AdminLogOut());
    setForm(false);
    history.push("/");
  };

  // Show Admin Login Form
  const toggleAdminForm = () => {
    setForm(!form);
  };

  // Goto Dashboard
  const dashboard = (event) => {
    event.preventDefault();
    history.push("/dashboard");
  };

  // SignUP form
  const signup = () => {
    history.push("/join");
  };

  // Check if the user is signedin or admin mode is on
  const display = () => {
    if (!loggedUser) {
      return (
        <>
          <Button size="small" onClick={loginFormButton} color="inherit">
            Login
          </Button>
          <Button color="inherit" size="small" onClick={signup}>
            Join
          </Button>
        </>
      );
    } else if (loggedUser.role === "user") {
      return (
        <div>
          {form ? (
            <>
              <AdminLoginForm />
              <Button color="inherit" size="small" onClick={toggleAdminForm}>
                Cancel
              </Button>
            </>
          ) : (
            <Button color="inherit" size="small" onClick={toggleAdminForm}>
              Switch to Admin
            </Button>
          )}
          <Button color="inherit" size="small" onClick={signout}>
            Logout
          </Button>
        </div>
      );
    } else if (loggedUser.role === "admin") {
      return (
        <div>
          <Button color="inherit" size="small" onClick={switchToUser}>
            User Mode
          </Button>
          <Button color="inherit" size="small" onClick={signout}>
            Logout
          </Button>
          <Button color="inherit" size="small" onClick={dashboard}>
            Dashboard
          </Button>
        </div>
      );
    }
  };

  return <div>{display()}</div>;
};

export default Auth;
