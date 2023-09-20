const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ItemList", itemListSchema);
