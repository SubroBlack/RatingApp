const itemsRouter = require("express").Router();
const mongoose = require("mongoose");

const Item = require("../models/item");

// Fetching all the items in the DB
itemsRouter.get("/", async (req, res) => {
  items = await Item.find({});
  //mongoose.connection.close();
  res.json(items.map((item) => item.toJSON()));
});

// Posting new item to be reviewed
itemsRouter.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description ? req.body.description : null,
    review: [],
  });
  console.log("REQ BODY", req.body);
  const result = await newItem.save();
  //mongoose.connection.close();
  res.status(201).json(result.toJSON());
});

//Rating an item
itemsRouter.put("/:id", async (req, res, next) => {
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
