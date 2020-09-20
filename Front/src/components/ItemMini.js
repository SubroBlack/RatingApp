import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "95vmin",
    margin: "auto",
    marginBottom: "4%",
    padding: "1.5%",
    display: "flex",
  },
  media: {
    margin: "0%",
    padding: "0%",
    marginRight: "auto",
    maxWidth: "57%",
  },
  img: {
    height: "30vmin",
    maxWidth: "100%",
    //marginRight: "auto",
  },
  content: {
    width: "40%",
    marginLeft: "auto",
  },
  info: {
    display: "flex",
  },
}));

const ItemMini = ({ item }) => {
  const classes = useStyles();
  const imgUrl = "/api/items/image/";

  // Logged in User
  const logged = useSelector((state) => state.logged);
  const history = useHistory();

  if (!item) {
    return null;
  }

  // Open the Item
  const openItem = () => {
    history.push(`/item/${item.id}`);
  };

  // The average of rating of the Item
  if (logged && logged.role === "admin") {
    if (item.review) {
      let sum = 0;
      Array.from(item.review, (x) => (sum = sum + x.rate));
      const average = sum / item.review.length;
      item.rate = average;
    }
  }

  // Date format
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(Date.parse(item.posted));
  const dateString = date.toLocaleDateString("en-US", options);

  const show = () => {
    return (
      <Card
        className={classes.root}
        raised={true}
        key={item.id}
        onClick={openItem}
      >
        <span className={classes.media}>
          <img
            className={classes.img}
            alt={item.filename}
            src={imgUrl + item.filename}
          />
        </span>
        <span className={classes.content}>
          <Rating
            name="size-medium"
            value={item.rate}
            precision={0.25}
            size="medium"
            disabled={true}
            className={classes.info}
          />
          <span className={classes.info}>
            {item.name}
            <br />
            {dateString}
            <br />
            Category: {item.category}
            <br />
            Total Reviews: {item.review ? item.review.length : null}
          </span>
        </span>
      </Card>
    );
  };

  return <div>{show()}</div>;
};

export default ItemMini;
