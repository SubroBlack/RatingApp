import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const classes = useStyles();

  if (!notification) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Snackbar open={true}>
        <Alert severity={notification.category}>{notification.data}</Alert>
      </Snackbar>
    </div>
  );
};

export default Notification;
