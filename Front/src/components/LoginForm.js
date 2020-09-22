import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  // useDispatch hook to dispatch the Action
  const dispatch = useDispatch();

  // useHistory to redirect
  const history = useHistory();

  // Submit the Login Form
  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(signIn(email, password));
    // Clearing the Login Form
    setEmail("");
    setPassword("");
    history.push("/");
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
          label="Email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
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
