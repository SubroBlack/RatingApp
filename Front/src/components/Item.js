import React from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../reducers/items";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90vmin",
    margin: "auto",
  },
  media: {
    height: 1,
    paddingTop: "56.25%", // 16:9
    display: "flex",
    //margin: "auto",
    //height: "35vh",
    maxWidth: "100%",
    overflow: "hidden",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#282c34",
  },

  fixedRate: {
    display: "block",
    justifyContent: "center",
    textAlign: "center",
    borderStyle: "solid",
    borderWidth: "3px",
    marginBottom: "2%",
    paddingTop: "1%",
    paddingBottom: "1%",
  },
}));

const Item = ({ item, clear }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
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
    clear();
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

  const show = () => {
    return (
      <Card className={classes.root} raised={true}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {item.name[0]}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="close"
              onClick={() => {
                clear();
              }}
            >
              <CloseIcon />
            </IconButton>
          }
          title={item.name}
          subheader={dateString}
        />
        <CardContent>{item.category}</CardContent>
        <CardMedia
          className={classes.media}
          image={imgUrl + item.filename}
          title={item.filename}
        />
        <CardContent>
          <>
            <div className={classes.fixedRate}>
              Average Rating
              <br />
              <Rating
                name="size-large"
                value={item.rate}
                precision={0.25}
                size="large"
                disabled={true}
              />
            </div>
            {item.description}
          </>
        </CardContent>
        <CardActions disableSpacing={true}>
          <IconButton color="inherit" onClick={editItem} aria-label="Edit">
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={removeItem}
            aria-label="Delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            color="inherit"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.expanded}>
            {item.review ? (
              <>
                {item.review.map((review, index) => (
                  <div key={index}>
                    <Rating
                      name="size-medium"
                      value={review.rate}
                      precision={0.5}
                      size="medium"
                      disabled={true}
                    />
                    <b>{review.comment ? review.comment : null}</b>
                  </div>
                ))}
              </>
            ) : null}
          </CardContent>
        </Collapse>
      </Card>
    );
  };

  return <div>{show()}</div>;
};

export default Item;
