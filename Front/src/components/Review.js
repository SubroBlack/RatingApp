import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { rateItem } from "../reducers/items";

const labels = {
  0.5: "Completely Useless",
  0.75: "Useless",
  1: "Almost Useless",
  1.25: "Disappointing",
  1.5: "Poor",
  1.75: "Very Bad",
  2: "Bad",
  2.25: "Not So Bad",
  2.5: "Barely Fine",
  2.75: "Fine",
  3: "Good",
  3.25: "Very Good",
  3.5: "Cool",
  3.75: "Very Cool",
  4: "Super",
  4.25: "Great",
  4.5: "Awesome",
  4.75: "Excellent",
  5: "Amazing",
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "90vw",
    margin: "auto",
    justifyContent: "center",
  },
  fixedRate: {
    display: "block",
    justifyContent: "center",
    textAlign: "center",
  },
  commentButton: {
    position: "absolute",
    right: "3%",
    zIndex: "1",
    margin: "1%",
  },
  commentSection: {
    position: "fixed",
    width: "100%",
    top: "10%",
    margin: "auto",
    backgroundColor: "lightgrey",
    color: "white",
    padding: "8%",
  },
  commentForm: {
    display: "grid",
    width: "50%",
    margin: "auto",
  },
});

const Review = ({ item, setAuto }) => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [commentSection, setCommentSection] = useState(false);
  const [comment, setComment] = useState("");
  const classes = useStyles();

  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // Function to send review
  const sendReview = () => {
    const review = {};
    review.rate = value;
    review.comment = comment;
    dispatch(rateItem(item.id, review));
    setCommentSection(false);
    setValue(0);
    setComment("");
    setAuto(true);
  };

  // Comment Section
  const commentArea = () => {
    if (commentSection) {
      return (
        <div className={classes.commentSection}>
          <h5>Reviewing {item.name}</h5>
          <form className={classes.commentForm}>
            <div>
              <Rating
                name="review-rate"
                value={value}
                precision={0.5}
                size="large"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                required={true}
                name="comment"
                label="Comment"
                value={comment}
                onChange={({ target }) => setComment(target.value)}
                variant="outlined"
              />
            </div>
            <Button type="submit" onClick={sendReview}>
              Submit
            </Button>
          </form>
        </div>
      );
    }
  };

  // Function to rate
  const rate = () => {
    const review = {};
    review.rate = value;
    review.comment = "";
    dispatch(rateItem(item.id, review));
    setValue(0);
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

  return (
    <div className={classes.root}>
      {logged && logged.role === "admin" ? (
        <div className={classes.fixedRate}>
          <Rating
            name="rate"
            value={item.rate}
            precision={0.25}
            size="large"
            disabled={true}
          />
          <br />
          <div>{labels[item.rate]}</div>
        </div>
      ) : (
        <>
          <Rating
            name="size-large"
            value={value}
            precision={0.5}
            size="large"
            onChange={(event, newValue) => {
              rate();
            }}
            onChangeActive={(event, newHover) => {
              setValue(newHover);
            }}
          />
          <span>
            <Button
              className={classes.commentButton}
              onClick={() => {
                setAuto(false);
                setCommentSection(true);
              }}
            >
              Comment
            </Button>
          </span>
          {commentArea()}
        </>
      )}
    </div>
  );
};

export default Review;
