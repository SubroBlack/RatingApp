import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, editUser } from "../reducers/user";

const EditUserForm = () => {
  // Edit Form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminPin, setAdminPin] = useState("");

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
    <div>
      <h5>Editing {user.name}</h5>

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
    </div>
  );
};

export default EditUserForm;
