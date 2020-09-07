import React, { useState } from "react";
import Auth from "./Auth";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  ClickAwayListener,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  appBar: {
    position: "relative",
    flexGrow: "1",
    fontSize: "calc(8px + 1vmin)",
    height: "8.5vh",
  },
  toolbar: {
    backgroundColor: "#282c34",
    display: "flex",
    color: "white",
    paddingLeft: "3vw",
  },
  menuButton: {
    position: "relative",
    backgroundColor: "#282c34",
    color: "white",
    height: "8.5vh",
    borderRadius: "50%",
    marginLeft: "1vmin",
  },
  title: {
    flexGrow: ".90",
  },
}));

const AppMenu = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  // Home Button
  const gotoHome = () => {
    history.push("/");
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        {open ? (
          <AppBar color="transparent" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography className={classes.title}>
                <h3 onClick={gotoHome}>Rating App</h3>
              </Typography>
              <Auth />
            </Toolbar>
          </AppBar>
        ) : (
          <IconButton
            type="button"
            color="inherit"
            onClick={handleClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default AppMenu;
