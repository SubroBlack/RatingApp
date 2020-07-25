import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

  // Check if the user is signedin or admin mode is on
  const display = () => {
    if (!loggedUser) {
      return (
        <div>
          <button onClick={loginFormButton}>SignIn</button>
        </div>
      );
    } else if (loggedUser.role === "user") {
      return (
        <div>
          {form ? (
            <>
              <AdminLoginForm />
              <button onClick={toggleAdminForm}>Cancel</button>
            </>
          ) : (
            <button onClick={toggleAdminForm}>Switch to Admin</button>
          )}
          <button onClick={signout}>Logout</button>
        </div>
      );
    } else if (loggedUser.role === "admin") {
      return (
        <div>
          <button onClick={switchToUser}>User Mode</button>
          <button onClick={signout}>Logout</button>
          <button onClick={dashboard}>Dashboard</button>
        </div>
      );
    }
  };

  return <div>{display()}</div>;
};

export default Auth;
