import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminSignIn } from "../reducers/login";

const AdminLoginForm = () => {
  // Admin Pin input
  const [adminPin, setAdminPin] = useState("");

  // useDispatch hook to dispatch the Action
  const dispatch = useDispatch();

  // useHistory to redirect
  const history = useHistory();

  // Submit the Login Form
  const handleAdminLogin = async (event) => {
    event.preventDefault();
    dispatch(adminSignIn(adminPin));
    // Clearing the Login Form
    setAdminPin("");
    history.push("/");
  };

  return (
    <>
      <form onSubmit={handleAdminLogin}>
        <input
          type="password"
          name="adminPin"
          placeholder="Admin Pin"
          value={adminPin}
          onChange={({ target }) => setAdminPin(target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default AdminLoginForm;
