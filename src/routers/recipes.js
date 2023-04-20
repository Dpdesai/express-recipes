const express = require("express");
const router = express.Router();

const { getAll } = require("../controller/recipes");


router.get("/", getAll);

module.exports = router;