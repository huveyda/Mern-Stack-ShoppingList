const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shoppingListItemSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const shoppingListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    items: [shoppingListItemSchema], // Using an array of items with quantities
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema);
