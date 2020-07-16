const itemsRouter = require("express").Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Item = require("../models/item");
const User = require("../models/user");

// Checking if the logged User is Admin
const signedAdmin = async (req, res) => {
  const user = await signedUser(req, res);
  if (!user || user === null) {
    return res.status(401).json({ error: "You have to be Signed In" });
  }
  const adminToken = req.adminToken;
  const decodedAdminToken = jwt.verify(adminToken, process.env.ADMIN_SECRET);
  if (!adminToken || !decodedAdminToken.id) {
    return res.status(401).json({ error: "Token Missing or Invalid" });
  }
  const admin = await User.findById(decodedAdminToken.id);
  console.log("Admin: ", admin);
  return admin;
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

module.exports = {
  signedUser,
  signedAdmin,
};
