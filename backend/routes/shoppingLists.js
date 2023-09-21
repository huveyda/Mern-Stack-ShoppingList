const express = require("express");
const {
  createShoppingList,
  getShoppingLists,
  getShoppingList,
  deleteShoppingList,
  updateShoppingList,
} = require("../controllers/shoppingListController.js");

const router = express.Router();

//GET ALL shopping lists
router.get("/", getShoppingLists);

//GET A SINGLE shopping list
router.get("/:id", getShoppingList);

//POST a new shopping list
router.post("/", createShoppingList);

router.delete("/:id", deleteShoppingList);

router.patch("/:id", updateShoppingList);

module.exports = router;
