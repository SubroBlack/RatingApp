const itemsRouter = require("express").Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Item = require("../models/item");

// Fetching all the items in the DB by Admin
itemsRouter.get("/", async (req, res) => {
  const user = req.user;
  const role = req.role;
  console.log(" Items Controller: Role: ", role);
  items = await Item.find({ user: user._id });
  //mongoose.connection.close();
  if (role === "admin") {
    res.json(items.map((item) => item.toJSON()));
  } else if (role === "user") {
    res.json(items.map((item) => item.toObject()));
  }
});

// Posting new item to be reviewed
itemsRouter.post("/", async (req, res) => {
  const user = req.user;
  const role = req.role;
  if (role !== "admin") {
    return res.status(401).json({ error: "Admin mode not signed in" });
  }
  const newItem = new Item({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description ? req.body.description : null,
    review: [],
    user: user._id,
  });
  const result = await newItem.save();
  console.log("New Item", result);
  //mongoose.connection.close();
  res.status(201).json(result.toJSON());
});

//Rating an item
itemsRouter.put("/:id", async (req, res, next) => {
  const user = req.user;
  const role = req.role;
  if (role !== "admin") {
    return res.status(401).json({ error: "Admin cannot leave review" });
  } else if (role !== "user") {
    return res.status(401).json({ error: "Sign In to leave a review" });
  }
  const review = {
    comment: req.body.review.comment ? req.body.review.comment : null,
    rate: Number(req.body.review.rate),
  };
  console.log("Req body: ", req.body);
  const item = await Item.findById(req.params.id);
  console.log("ITEM :", item.review);
  const newReviews = item.review.concat(review);
  item.review = newReviews;
  console.log("New ITEM :", item.review);
  await item.save();
  res.json(item.toJSON());
});

module.exports = itemsRouter;
