import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../reducers/login";

const LoginForm = () => {
  // Login Form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useDispatch hook to dispatch the Action
  const dispatch = useDispatch();

  // useHistory to redirect
  const history = useHistory();

  // Submit the Login Form
  const handleLogin = async (event) => {
    event.preventDefault();
    await dispatch(signIn(email, password));
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
    <div>
      <h5>Login</h5>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <input type="submit" />
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
};

export default LoginForm;
