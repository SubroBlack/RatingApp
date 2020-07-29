const userRouter = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.js");
const Item = require("../models/item");

// Getting a specific User data
userRouter.get("/", async (req, res) => {
  const user = req.user;
  const role = req.role;
  if (role !== "admin") {
    return res.status(401).json({ error: "Switch to Admin mode" });
  }
  res.json(user.toJSON());
});

// Posting a new User
userRouter.post("/", async (req, res) => {
  if (req.body.password.length < 3) {
    return res
      .status(400)
      .json({ error: "Password must at least 3 character long" });
  } else if (req.body.adminPin.length !== 4) {
    return res.status(400).json({ error: "Admin pin must be 4 digit code" });
  }
  const salt = 10;
  const passwordHash = await bcrypt.hash(req.body.password, salt);
  const adminPinHash = await bcrypt.hash(req.body.adminPin, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: passwordHash,
    adminPinHash: adminPinHash,
  });

  const savedUser = await user.save();
  console.log("User Controller, New User saved : ", savedUser);
  res.status(201).json(savedUser.toJSON());
});

// Editing a User
userRouter.post("/edit", async (req, res) => {
  console.log("Edit User router: ", req.body);
  const user = req.user;
  const role = req.role;
  if (role !== "admin") {
    return res.status(401).json({ error: "Unauthorized Action" });
  }
  if (req.body.password.length < 3) {
    return res
      .status(400)
      .json({ error: "Password must at least 3 character long" });
  } else if (req.body.adminPin.length !== 4) {
    return res.status(400).json({ error: "Admin pin must be 4 digit code" });
  }
  const salt = 10;
  const passwordHash = await bcrypt.hash(req.body.password, salt);
  const adminPinHash = await bcrypt.hash(req.body.adminPin, salt);

  const editUser = {
    name: req.body.name,
    email: req.body.email,
    passwordHash: passwordHash,
    adminPinHash: adminPinHash,
  };
  const editedUser = await User.findByIdAndUpdate(user.id, editUser, {
    new: true,
  });

  console.log("User Controller, User Edited : ", editedUser);
  res.status(201).json(editedUser.toJSON());
});

// Deleting a User
userRouter.delete("/", async (req, res) => {
  const user = req.user;
  const role = req.role;
  if (role !== "admin") {
    return res.status(401).json({ error: "Unauthorized Action" });
  }
  const result = await User.deleteOne({ _id: user._id });
  await Item.deleteMany({ user: user._id });
  console.log("Account Deleted: ", result);
  res.status(201).json({ success: "User Deleted" });
});

module.exports = userRouter;
