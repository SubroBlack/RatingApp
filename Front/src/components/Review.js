import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { Box } from "@material-ui/core/";
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
});

const Review = ({ item }) => {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // Function to rate
  const rate = (rate) => {
    const review = {};
    review.rate = rate;
    review.comment = "";
    dispatch(rateItem(item.id, review));
    setValue(0);
  };

  /*
  // Text for rating
  {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
  */

  // The average of rating of the Item
  if (logged && logged.role === "admin") {
    if (item.review) {
      let sum = 0;
      Array.from(item.review, (x) => (sum = sum + x.rate));
      const average = sum / item.review.length;
      item.rate = average;
    }
  }

  console.log("The Average Rating of the Item: ", item.rate);

  return (
    <div className={classes.root}>
      {logged && logged.role === "admin" ? (
        <div className={classes.fixedRate}>
          <Rating
            name="size-large"
            value={item.rate}
            precision={0.25}
            size="large"
            disabled={true}
          />
          <br />
          <div>{labels[item.rate]}</div>
        </div>
      ) : (
        <Rating
          name="size-large"
          value={value}
          precision={0.5}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
            rate(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
      )}
    </div>
  );
};

export default Review;
