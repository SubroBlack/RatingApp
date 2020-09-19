import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../reducers/user";
import { logOut } from "../reducers/login";
import { allItems } from "../reducers/items";
import ItemMini from "./ItemMini";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardActions, IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "95vmin",
    margin: "auto",
  },
  buttons: {
    marginLeft: "auto",
  },
}));

const DashBoard = () => {
  // Dispatch
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.logged);
  const classes = useStyles();

  // Fetching teh User info
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, logged]);

  // Fetching data according the role of user signed in
  useEffect(() => {
    dispatch(allItems());
  }, [logged, dispatch]);

  // useHistory hook for redirections
  const history = useHistory();
  // The User
  const user = useSelector((state) => state.user);
  const items = useSelector((state) => state.items);
  if (!user) {
    return null;
  }

  // Form to add New Items for review
  const addItemForm = (event) => {
    event.preventDefault();
    history.push("/addItem");
  };

  // EditUserForm
  const editUser = (event) => {
    event.preventDefault();
    history.push("/editUser");
  };

  // Remove the account
  const removeUser = (event) => {
    event.preventDefault();
    dispatch(deleteUser(user));
    dispatch(logOut());
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <CardActionArea>
        <CardActions disableSpacing>
          <h3>{user.name}'s DashBoard</h3>
          <span className={classes.buttons}>
            <IconButton
              color="inherit"
              onClick={addItemForm}
              aria-label="Add an Item"
            >
              <AddIcon />
            </IconButton>
            <IconButton color="inherit" onClick={editUser} aria-label="Edit">
              <SettingsIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={removeUser}
              aria-label="Delete"
            >
              <DeleteIcon />
            </IconButton>
          </span>
        </CardActions>
      </CardActionArea>
      {items
        ? items.map((item, index) => <ItemMini key={index} item={item} />)
        : null}
    </div>
  );
};

export default DashBoard;
