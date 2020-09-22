const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const loginRouter = require("express").Router();
const User = require("../models/user");

// TO handle SignIn
loginRouter.post("/", async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ name: body.name });
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "Invalid Email or Password",
    });
  }

  const userForToken = {
    name: user.name,
    email: user.email,
    id: user._id,
    role: "user",
  };
  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).send({ token, role: "user" });
});

// Login as Admin
loginRouter.post("/admin/", async (req, res) => {
  const body = req.body;
  const user = req.user;
  const validAdmin =
    user === null
      ? false
      : await bcrypt.compare(body.adminPin, user.adminPinHash);
  if (!(user && validAdmin)) {
    return res.status(401).json({
      error: "Wrong Admin Pin",
    });
  }

  const adminForToken = {
    name: user.name,
    email: user.email,
    id: user._id,
    role: "admin",
  };
  const token = jwt.sign(adminForToken, process.env.SECRET);
  res.status(200).send({ token, role: "admin" });
});

module.exports = loginRouter;
