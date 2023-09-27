const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shoppingListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema);
