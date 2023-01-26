const express = require("express");
const router = express.Router();
const products = require("../data/products.json");

router.get("/", (req, res) => {
  res.status(200).send(products);
});

router.get(`/:uid`, (req, res) => {
  const { uid } = req.params;
  const findProductsById = products.filter((i) => i.id === parseInt(uid));

  res.status(200).send(findProductsById);
});

module.exports = router;
