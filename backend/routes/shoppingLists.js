const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "post a new shopping lists" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a shopping list" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "update a shopping list" });
});

module.exports = router;
