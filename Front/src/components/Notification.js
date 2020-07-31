import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  /*
  Notification = {data: "notification text", category: notify/alert/error}
  */

  if (!notification) {
    return null;
  }

  const style = {
    display: notification.data === null ? "none" : "block",
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div style={style} className="notification">
      {notification.data}
    </div>
  );
};

export default Notification;
