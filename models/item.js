const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: false,
  },
  review: [
    {
      comment: { type: String, required: false },
      rate: { type: Number, min: 1, max: 5, required: true },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

itemSchema.set("toJSON", {
  transform: (document, returnedDocument) => {
    returnedDocument.id = returnedDocument._id.toString();
    delete returnedDocument._id;
    delete returnedDocument.__v;
    // Hide the reviews
    //delete returnedDocument.review;
  },
});

module.exports = mongoose.model("Item", itemSchema);
