const express = require("express");
const router = express.Router();
const users = require("../data/users.json");

router.get("/", (req, res) => {
  res.status(200).send(users);
});

router.get(`/:uid`, (req, res) => {
  const { uid } = req.params;
  const findUserById = users.filter((i) => i.id === parseInt(uid));

  res.status(200).send(findUserById);
});

module.exports = router;
