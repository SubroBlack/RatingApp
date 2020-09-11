import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, editUser } from "../reducers/user";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const EditUserForm = () => {
  // Edit Form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminPin, setAdminPin] = useState("");

  const classes = useStyles();

  // useHistory to redirect
  const history = useHistory();

  // useDispatch hook to dispatch the Action
  const dispatch = useDispatch();

  const logged = useSelector((state) => state.logged);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, logged]);

  // The User
  const user = useSelector((state) => state.user);

  console.log("Editing user: ", user);
  if (!user) {
    return null;
  }

  // Submit the Edit User
  const submit = async (event) => {
    event.preventDefault();
    await dispatch(editUser({ name, email, password, adminPin }));
    setName("");
    setEmail("");
    setPassword("");
    setAdminPin("");
    history.push("/");
  };

  // Cancel the add Item process
  const cancel = (event) => {
    event.preventDefault();
    history.push("/dashboard");
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>Editing {user.name}</h3>
      <br />
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

export default EditUserForm;
