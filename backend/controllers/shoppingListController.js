const ShoppingList = require("../models/shoppingListModel");
const mongoose = require("mongoose");

//get ALL shopping lists
const getShoppingLists = async (req, res) => {
  const shoppingLists = await ShoppingList.find().sort({ createdAt: -1 });
  res.status(200).json(shoppingLists);
};

//get A SINGLE shopping list
const getShoppingList = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such a shopping list" });
  }

  const shoppingList = await ShoppingList.findById(id);
  if (!shoppingList) {
    return res.status(404).json({ error: "No such a shopping list" });
  }
  res.status(200).json(shoppingList);
};

//create A NEW shopping list
const createShoppingList = async (req, res) => {
  const { title, items } = req.body;

  //add doc to db
  try {
    const shoppingList = await ShoppingList.create({ title, items });
    res.status(200).json(shoppingList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete A shopping list
const deleteShoppingList = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such a shopping list" });
  }

  const shoppingList = await ShoppingList.findByIdAndDelete({ _id: id });
  if (!shoppingList) {
    return res.status(404).json({ error: "No such a shopping list" });
  }
  res.status(200).json(shoppingList);
};

//update A shopping list
const updateShoppingList = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such a shopping list" });
  }

  const shoppingList = await ShoppingList.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!shoppingList) {
    return res.status(400).json({ error: "No such shopping list" });
  }
  res.status(200).json(shoppingList);
};

module.exports = {
  createShoppingList,
  getShoppingLists,
  getShoppingList,
  deleteShoppingList,
  updateShoppingList,
};
