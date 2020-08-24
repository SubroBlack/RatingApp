import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allItems } from "../reducers/items";
import Item from "./Item";
import { Paper, Typography, Button, MobileStepper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
}));

const Items = () => {
  const [singleItem, setSingleItem] = useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const dispatch = useDispatch();

  // Logged in User
  const logged = useSelector((state) => state.logged);

  // Fetching data according the role of user signed in
  useEffect(() => {
    dispatch(allItems());
  }, [logged, dispatch]);

  // Main Items to be reviewed
  const items = useSelector((state) => state.items);

  // URL to fetch the iamges
  const imgUrl = "/api/items/image/";
  const maxSteps = items.length;

  const openItem = (item) => {
    logged.role === "admin"
      ? setSingleItem(item)
      : console.log("Not Authorized");
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log("Items: ", items);

  const show = () => {
    if (items.length < 1) {
      return null;
    }
    if (singleItem) {
      return (
        <>
          <Item item={singleItem} clear={setSingleItem} />
          <button
            onClick={() => {
              openItem(null);
            }}
          >
            Cancel
          </button>
        </>
      );
    }
    /*
    return (
      <>
        {items.map((item) => (
          <div key={item.id}>
            <h3 onClick={() => openItem(item)}> {item.name}</h3>
            <div className="galleryImageContainer">
              <img
                className="galleryImage"
                src={imgUrl + item.filename}
                alt={item.name}
              />
            </div>
            <br />
          </div>
        ))}
      </>
    );*/
    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{items[activeStep].name}</Typography>
        </Paper>
        <img
          className="galleryImage"
          src={imgUrl + items[activeStep].filename}
          alt={items[activeStep].name}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    );
  };

  return <div>{show()}</div>;
};

export default Items;
