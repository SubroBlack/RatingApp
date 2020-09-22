const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const itemsRouter = require("./controllers/items");

const config = require("./utils/config");
const { upload } = require("./utils/helper");
const { unknownEndpoint, errorHandler } = require("./utils/middleware");
const userRouter = require("./controllers/user");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware");

const app = express();

//Express json parser
app.use(express.json());

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("Connected to MongoDB");
    },
    (err) => {
      console.log("Connection to Database Failed: ", err);
    }
  );

// CORS to allow Cross Origin Resource Sharing
app.use(cors());
// Body parser to parse the post objects
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HELLO Fucking WORLD");
});

app.use(middleware.tokenExtractor);
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/items/", itemsRouter(upload));

// To enable serving static build folder of frontend
app.use(express.static("build"));

// Middlewares
app.use("/api*", unknownEndpoint);
app.use(errorHandler);

// Serve Static file
app.use("/*", express.static("build"));

module.exports = app;
