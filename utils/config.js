require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI_TRIAL = process.env.MONGODB_URI_TRIAL;
module.exports = {
  MONGODB_URI_TRIAL,
  MONGODB_URI,
  PORT,
};
