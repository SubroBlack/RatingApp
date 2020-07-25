const userRouter = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.js");

// Getting a specific User data
userRouter.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user.toJSON());
});

// Posting a new User
userRouter.post("/", async (req, res) => {
  console.log("User router: ", req.body);
  if (req.body.password.length < 3) {
    return res
      .status(400)
      .json({ error: "Password must at least 3 character long" });
  } else if (!req.body.adminPin.length === 4) {
    console.log(
      "AdminPin",
      req.body.adminPin,
      " the length ",
      req.body.adminPin.length
    );
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
  res.status(201).json(savedUser.toJSON());
});

module.exports = userRouter;
