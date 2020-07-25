import React from "react";
import { useHistory } from "react-router";

const DashBoard = () => {
  // useHistory hook for redirections
  const history = useHistory();

  // Form to add New Items for review
  const addItemForm = (event) => {
    event.preventDefault();
    history.push("/addItem");
  };
  return (
    <>
      <h5>DashBoard</h5>
      <button onClick={addItemForm}>Add an Item</button>
    </>
  );
};

export default DashBoard;
