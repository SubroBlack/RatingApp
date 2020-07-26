import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser } from "../reducers/user";

const JoinForm = () => {
  // Login Form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminPin, setAdminPin] = useState("");

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

  return (
    <>
      <h6>Join Us!!!</h6>
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          placeholder="Name of The Provider"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        <input
          type="password"
          name="adminPin"
          placeholder="Admin Pin"
          value={adminPin}
          onChange={({ target }) => setAdminPin(target.value)}
        />
        <br />
        <input type="submit" />
        <br />
        <button onClick={cancel}>Cancel</button>
      </form>
    </>
  );
};

export default JoinForm;
