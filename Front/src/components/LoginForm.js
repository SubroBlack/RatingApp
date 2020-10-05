import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { signIn } from "../reducers/login";

const useStyles = makeStyles({
  root: {
    borderStyle: "solid",
    borderRadius: "1%",
    borderWidth: "4px",
    margin: "2%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  header: {
    textAlign: "center",
  },
  form: {
    display: "grid",
    width: "25vmax",
    margin: "auto",
  },
});

const LoginForm = () => {
  // Login Form input
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  // useDispatch hook to dispatch the Action
  const dispatch = useDispatch();

  // useHistory to redirect
  const history = useHistory();

  // Redirect if successful Login
  const loggedUser = useSelector((state) => state.logged);
  if (loggedUser && loggedUser.role) {
    history.push("/");
  }

  // Submit the Login Form
  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(signIn(name, password));
    // Clearing the Login Form
    setName("");
    setPassword("");
  };

  // Cancel the login process
  const cancel = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>Login</h3>
      <form onSubmit={handleLogin} className={classes.form}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          variant="outlined"
        />
        <br />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          variant="outlined"
        />
        <br />
        <Button type="submit">Submit</Button>
        <br />
        <Button onClick={cancel}>Cancel</Button>
      </form>
    </div>
  );
};

export default LoginForm;
