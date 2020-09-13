import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { adminSignIn } from "../reducers/login";

const useStyles = makeStyles({
  form: {
    display: "inline",
  },
  input: {
    color: "white",
  },
});

const AdminLoginForm = () => {
  // Admin Pin input
  const [adminPin, setAdminPin] = useState("");
  const classes = useStyles();

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
    history.push("/dashboard");
  };

  return (
    <>
      <form onSubmit={handleAdminLogin} className={classes.form}>
        <Input
          name="adminPin"
          type="password"
          size="small"
          color="secondary"
          className={classes.input}
          value={adminPin}
          onChange={({ target }) => setAdminPin(target.value)}
        />
      </form>
    </>
  );
};

export default AdminLoginForm;
