const itemsRouter = require("express").Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Item = require("../models/item");
const User = require("../models/user");

// Checking if the logged User is Admin or User
const signedRole = async (req, res) => {
  const user = await signedUser(req, res);
  if (!user || user === null) {
    return res.status(401).json({ error: "You have to be Signed In" });
  }
  const token = req.token;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "Token Missing or Invalid" });
  }
  return decodedToken.role;
};

// Checking the signedin user:
const signedUser = async (req, res) => {
  const token = req.token;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "Token Missing or Invalid" });
  }
  const user = await User.findById(decodedToken.id);
  console.log("User: ", user);
  return user;
};

/*
module.exports = {
  signedUser,
  signedRole,
};
*/
