import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rateItem } from "../reducers/items";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton, TextField } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import CloseIcon from "@material-ui/icons/Close";
import RateReviewIcon from "@material-ui/icons/RateReview";

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
    marginBottom: "1%",
  },
  fixedRate: {
    display: "block",
    justifyContent: "center",
    textAlign: "center",
  },
  commentButton: {
    position: "absolute",
    right: "3%",
    bottom: "5%",
    zIndex: "1",
    margin: "1%",
    color: "#4d0f00",
  },
  commentSection: {
    position: "fixed",
    width: "100%",
    top: "15vh",
    margin: "auto",
    backgroundColor: "#b3b3b3",
    opacity: "0.9",
    color: "white",
  },
  commentForm: {
    width: "85%",
    margin: "auto",
    paddingBottom: "10%",
  },
});

const Review = ({ item, setAuto }) => {
  const [value, setValue] = useState(0);
  const [commentSection, setCommentSection] = useState(false);
  const [comment, setComment] = useState("");
  const classes = useStyles();

  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // Close
  const close = () => {
    setCommentSection(false);
    setValue(0);
    setComment("");
    setAuto(true);
  };

  // Function to send review
  const sendReview = () => {
    const review = {};
    review.rate = value;
    review.comment = comment;
    dispatch(rateItem(item.id, review));
    close();
  };

  // Comment Section
  const commentArea = () => {
    if (commentSection) {
      return (
        <div className={classes.commentSection}>
          <IconButton className={classes.closeButton} onClick={close}>
            <CloseIcon />
          </IconButton>
          <div className={classes.commentForm}>
            <form className={classes.fixedRate}>
              <h5>Reviewing {item.name}</h5>
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
              <br />
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  required={true}
                  rowsMax="2"
                  name="comment"
                  label="Comment"
                  value={comment}
                  onChange={({ target }) => setComment(target.value)}
                  variant="outlined"
                />
              </div>
              <br />
              <Button type="submit" onClick={sendReview}>
                Submit
              </Button>
            </form>
          </div>
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
            <IconButton
              className={classes.commentButton}
              onClick={() => {
                setAuto(false);
                setCommentSection(true);
              }}
            >
              <RateReviewIcon />
            </IconButton>
          </span>
          {commentArea()}
        </>
      )}
    </div>
  );
};

export default Review;
