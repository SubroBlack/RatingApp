// Token Extractor
const tokenExtractor = (req, res, next) => {
  const auth = req.get("auth");
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    req.token = auth.substring(7);
  }
  const adminToken = req.get("admin");
  if (adminToken && adminToken.toLowerCase().startsWith("bearer ")) {
    req.adminToken = adminToken.substring(7);
  }
  next();
};

// Unknown endpoint handler
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "Unknown Endpoint" });
};

// Error Handler function
const errorHandler = (error, req, res, next) => {
  console.error(error.message);

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
