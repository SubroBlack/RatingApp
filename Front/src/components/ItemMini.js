import React from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../reducers/items";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90vmin",
    margin: "auto",
    marginBottom: "2%",
    padding: "2%",
    display: "flex",
  },
  img: {
    height: "25vmin",
    marginRight: "auto",
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
  const [expanded, setExpanded] = React.useState(false);
  const imgUrl = "/api/items/image/";

  // Dispatch
  const dispatch = useDispatch();
  // Logged in User
  const logged = useSelector((state) => state.logged);
  const history = useHistory();

  // GOto Edit Item form
  const editItem = () => {
    history.push(`/edit/${item.id}`);
  };

  // Delete the current Item
  const removeItem = async () => {
    dispatch(deleteItem(item));
    //clear();
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!item) {
    return null;
  }

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

  console.log("Item: ", item);

  /*
<CardMedia
          className={classes.media}
          image={imgUrl + item.filename}
          title={item.filename}
        />
  */

  const show = () => {
    return (
      <Card className={classes.root} raised={true} key={item.id}>
        <span className={classes.media}>
          <img className={classes.img} src={imgUrl + item.filename} />
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
          </span>
        </span>
      </Card>
    );
  };

  return <div>{show()}</div>;
};

export default ItemMini;
