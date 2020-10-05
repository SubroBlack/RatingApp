import React, { useState } from "react";
import Auth from "./Auth";
import { Link } from "react-router-dom";
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
    marginBottom: "1vmin",
  },
  appBar: {
    position: "relative",
    backgroundColor: "#282c34",
    flexGrow: "1",
    fontSize: "calc(8px + 1vmin)",
    height: "6.5vh",
    boxShadow: "none",
    padding: "1%",
  },
  toolbar: {
    display: "flex",
    color: "white",
    paddingLeft: "3vw",
    minHeight: "100%",
  },
  menuButton: {
    position: "relative",
    backgroundColor: "#282c34",
    color: "white",
    height: "6.5vh",
    borderRadius: "10%",
    padding: "1%",
  },
  title: {
    flexGrow: ".90",
  },
}));

const AppMenu = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        {open ? (
          <AppBar color="transparent" className={classes.appBar}>
            <Toolbar disableGutters={true} className={classes.toolbar}>
              <Typography variant="inherit" className={classes.title}>
                <Link className="App-link" to="/">
                  <h3>Rating App</h3>
                </Link>
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
