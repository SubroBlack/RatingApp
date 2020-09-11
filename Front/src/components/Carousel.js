import React, { useState } from "react";
import { Button, MobileStepper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons/";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Review from "./Review";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  header: {
    textAlign: "center",
  },
  imgContainer: {
    width: "100%",
    paddingTop: "0.5vmin",
  },
  img: {
    display: "flex",
    margin: "auto",
    height: "70vh",
    width: "auto",
    maxWidth: "90vw",
    overflow: "hidden",
  },
}));

const Carousel = ({ items, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  // URL to fetch the iamges
  const imgUrl = "/api/items/image/";
  const maxSteps = items.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((step, index) => (
          <div className={classes.imgContainer} key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={imgUrl + step.filename}
                alt={step.name}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className={classes.header}>
        <div onClick={() => open(items[activeStep])}>
          {items[activeStep].name}
        </div>
        <Review item={items[activeStep]} />
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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

export default Carousel;
