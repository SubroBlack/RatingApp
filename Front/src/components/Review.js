import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { rateItem } from "../reducers/items";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "90vw",
    justifyContent: "center",
  },
  ratings: {},
});

const Review = ({ item }) => {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged).role;

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

  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default Review;
