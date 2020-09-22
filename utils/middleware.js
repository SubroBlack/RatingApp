const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Token Extractor
const tokenExtractor = async (req, res, next) => {
  const auth = req.get("auth");
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    const token = auth.substring(7);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: "Token Missing or Invalid" });
    }
    const user = await User.findById(decodedToken.id);
    req.user = user;
    req.role = decodedToken.role;
    console.log("Req User: ", user);
    console.log("Role: ", decodedToken.role);
  }
  next();
};

// Unknown endpoint handler
const unknownEndpoint = (req, res) => {
  console.log("Unknown Point Error: ", req.params);
  res.status(404).send({ error: "Unknown Endpoint" });
};

// Error Handler function
const errorHandler = (error, req, res, next) => {
  console.error("Error Handler: ", error.message);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({
      error: error.message,
    });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(401).json({
      error: "invalid token",
    });
  }
  next(error);
};

module.exports = {
  tokenExtractor,
  unknownEndpoint,
  errorHandler,
};
