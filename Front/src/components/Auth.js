import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { logOut, AdminLogOut } from "../reducers/login.js";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AdminLoginForm from "./AdminLoginForm";

const useStyles = makeStyles({
  root: {},
  button: {
    fontSize: "calc(7px + 0.5vmin)",
  },
});

const Auth = () => {
  const classes = useStyles();
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
          <Button
            className={classes.button}
            size="small"
            onClick={loginFormButton}
            color="inherit"
          >
            Login
          </Button>
          <Button
            className={classes.button}
            color="inherit"
            size="small"
            onClick={signup}
          >
            Join
          </Button>
        </>
      );
    } else if (loggedUser.role === "user") {
      return (
        <>
          {form ? (
            <>
              <AdminLoginForm />
              <Button
                className={classes.button}
                color="inherit"
                size="small"
                onClick={toggleAdminForm}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                className={classes.button}
                color="inherit"
                size="small"
                onClick={toggleAdminForm}
              >
                Switch to Admin
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                size="small"
                onClick={signout}
              >
                Logout
              </Button>
            </>
          )}
        </>
      );
    } else if (loggedUser.role === "admin") {
      return (
        <>
          <Button
            className={classes.button}
            color="inherit"
            size="small"
            onClick={switchToUser}
          >
            User Mode
          </Button>
          <Button
            className={classes.button}
            color="inherit"
            size="small"
            onClick={dashboard}
          >
            Dashboard
          </Button>
          <Button
            className={classes.button}
            color="inherit"
            size="small"
            onClick={signout}
          >
            Logout
          </Button>
        </>
      );
    }
  };

  return <div>{display()}</div>;
};

export default Auth;
