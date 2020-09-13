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

  /* 
    GET: Fetches a particular image and render on browser
  */
  itemsRouter.get("/image/:filename", async (req, res, next) => {
    gfs.find({ filename: req.params.filename }).toArray((err, files) => {
      if (!files[0] || files.length === 0) {
        return res.status(200).json({
          success: false,
          message: "No files available",
        });
      }

      if (
        files[0].contentType === "image/jpeg" ||
        files[0].contentType === "image/png" ||
        files[0].contentType === "image/svg+xml"
      ) {
        // render image to browser
        gfs.openDownloadStreamByName(req.params.filename).pipe(res);
      } else {
        res.status(404).json({
          err: "Not an image",
        });
      }
    });
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
    res.json(item.toObject());
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
