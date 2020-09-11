import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addUser } from "../reducers/user";

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

const JoinForm = () => {
  // Login Form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminPin, setAdminPin] = useState("");
  const classes = useStyles();

  // useDispatch hook to dispatch the Action
  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // useHistory to redirect
  const history = useHistory();

  // Submit the Join
  const submit = async (event) => {
    event.preventDefault();
    await dispatch(addUser({ name, email, password, adminPin }));
    setName("");
    setEmail("");
    setPassword("");
    setAdminPin("");
    history.push("/");
  };

  // cancel the Join Form
  const cancel = (event) => {
    event.preventDefault();
    history.push("/");
  };

  if (logged !== null) {
    return null;
  }

  /*
        <input
          type="text"
          name="name"
          placeholder="Name of The Provider"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
  */

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>Join Us!!!</h3>
      <form onSubmit={submit} className={classes.form}>
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
        <TextField
          required
          id="outlined-password-input"
          label="Admin Pin"
          name="adminPin"
          type="password"
          value={adminPin}
          onChange={({ target }) => setAdminPin(target.value)}
          variant="outlined"
        />
        <br />
        <Button type="submit" color="primary">
          Submit
        </Button>
        <br />
        <Button onClick={cancel} color="secondary">
          Cancel
        </Button>
        <br />
      </form>
    </div>
  );
};

export default JoinForm;
