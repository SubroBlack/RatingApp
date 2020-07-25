const itemsRouter = require("express").Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Item = require("../models/item");

// Fetching all the items in the DB by Admin
itemsRouter.get("/", async (req, res, next) => {
  const user = req.user;
  const role = req.role;
  let items = [];
  if (!user) {
    return res.json(items.map((item) => item));
  }
  items = await Item.find({ user: user._id });
  //mongoose.connection.close();
  if (role === "admin") {
    res.json(items.map((item) => item.toJSON()));
  } else if (role === "user") {
    res.json(items.map((item) => item.toObject()));
  }
});

// Fetching single item according to Id
itemsRouter.get("/:id", async (req, res, next) => {
  const user = req.user;
  const role = req.role;
  let items = [];
  if (!user) {
    return res.json(items.map((item) => item));
  }
  items = await Item.find({ user: user._id, _id: req.params.id });
  //mongoose.connection.close();
  if (role === "admin") {
    res.json(items.map((item) => item.toJSON()));
  } else if (role === "user") {
    res.json(items.map((item) => item.toObject()));
  }
});

// Posting new item to be reviewed
itemsRouter.post("/", async (req, res, next) => {
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

// Editing an Item
itemsRouter.put("/:id", async (req, res) => {
  const user = req.user;
  const role = req.role;
  const item = await Item.findById(req.params.id);
  if (role !== "admin") {
    return res.status(401).json({ error: "Switch to Admin mode to edit Item" });
  } else if (user._id.toString() !== item.user.toString()) {
    return res.status(401).json({ error: "Unauthorized Action" });
  }
  const newItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(newItem.toJSON());
});

//Rating an item
itemsRouter.put("/rate/:id", async (req, res, next) => {
  const user = req.user;
  const role = req.role;
  if (role === "admin") {
    return res.status(401).json({ error: "Admin cannot leave review" });
  } else if (role !== "user") {
    return res.status(401).json({ error: "Sign In to leave a review" });
  }
  const review = {
    comment: req.body.comment ? req.body.comment : null,
    rate: Number(req.body.rate),
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
