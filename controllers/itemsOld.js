const itemsRouter = require("express").Router();
const mongoose = require("mongoose");
const Item = require("../models/item");
const User = require("../models/user");
const config = require("../utils/config");

module.exports = (upload) => {
  // Initialize GridFS stream
  const url = config.MONGODB_URI;
  const connect = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let gfs;

  connect.once("open", () => {
    // initialize stream
    gfs = new mongoose.mongo.GridFSBucket(connect.db, {
      bucketName: "uploads",
    });
  });

  // Get all the files
  const getFiles = async () => {
    const files = await gfs.find().toArray();
    return files;
  };

  // Matching the item with image
  const getImage = (files, item) => {
    return files.filter((file) => file._id.toString() === item.fileId)[0];
  };

  // Fetching all the items in the DB by Admin
  itemsRouter.get("/", async (req, res, next) => {
    const user = req.user;
    const role = req.role;
    let items = [];
    if (!user) {
      return res.json(items.map((item) => item));
    }
    items = await Item.find({ user: user._id });
    // Finding the image for the item
    const files = await getFiles();
    //mongoose.connection.close();
    if (role === "admin") {
      res.json(
        items.map((item) => ({
          info: item.toJSON(),
          image: getImage(files, item),
        }))
      );
    } else if (role === "user") {
      res.json(
        items.map((item) => ({
          info: item.toObject(),
          image: getImage(files, item),
        }))
      );
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
    // Finding the image for the item
    const files = await getFiles();
    //mongoose.connection.close();
    if (role === "admin") {
      res.json(
        items.map((item) => ({
          info: item.toJSON(),
          image: getImage(files, item),
        }))
      );
    } else if (role === "user") {
      res.json(
        items.map((item) => ({
          info: item.toObject(),
          image: getImage(files, item),
        }))
      );
    }
  });

  // Posting new item to be reviewed
  itemsRouter.post("/", upload.single("file"), async (req, res, next) => {
    const user = req.user;
    const role = req.role;
    if (role !== "admin") {
      return res.status(401).json({ error: "Admin mode not signed in" });
    }
    const newItem = new Item({
      name: req.body.name,
      category: req.body.category,
      filename: req.file.filename,
      fileId: req.file.id,
      posted: new Date(Date.now()),
      description: req.body.description ? req.body.description : null,
      review: [],
      user: user._id,
    });
    const result = await newItem.save();
    console.log("New Item", result);
    user.items = user.items.concat(result._id);
    await user.save();
    //mongoose.connection.close();
    res.status(201).json(result.toJSON());
  });

  // Editing an Item
  itemsRouter.put("/:id", async (req, res) => {
    const user = req.user;
    const role = req.role;
    const item = await Item.findById(req.params.id);
    if (role !== "admin") {
      return res
        .status(401)
        .json({ error: "Switch to Admin mode to edit Item" });
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
      posted: new Date(Date.now()),
    };
    const item = await Item.findById(req.params.id);
    const newReviews = item.review.concat(review);
    item.review = newReviews;
    console.log("New ITEM :", item.review);
    await item.save();
    res.json(item.toJSON());
  });

  // Deleting the Item
  itemsRouter.delete("/:id", async (req, res) => {
    const user = req.user;
    const role = req.role;
    const item = await Item.findById(req.params.id);
    if (role !== "admin") {
      return res.status(401).json({ error: "Unauthorized Action" });
    } else if (user._id.toString() !== item.user.toString()) {
      return res.status(401).json({ error: "Unauthorized Action" });
    }
    await Item.findByIdAndDelete(req.params.id);
    console.log("Item deleted");
    user.items = user.items.filter((a) => a.toString() !== req.params.id);
    await user.save();
    res.status(204).end();
  });

  return itemsRouter;
};
