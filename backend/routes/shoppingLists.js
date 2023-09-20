const express = require("express");
const ShoppingList = require("../models/shoppingListModel");

const router = express.Router();

//GET ALL shopping lists
router.get("/", (req, res) => {
  res.json({ mssg: "get all shopping lists" });
});

//GET A SINGLE shopping list
router.get("/:id", (req, res) => {
  res.json({ mssg: "get a single shopping list" });
});

//POST a new shopping list
router.post("/", async (req, res) => {
  const { title, items } = req.body;
  try {
    const shoppingList = await ShoppingList.create({ title, items });
    res.status(200).json(shoppingList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a shopping list" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "update a shopping list" });
});

module.exports = router;
