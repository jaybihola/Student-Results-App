const express = require("express");
const router = express.Router();
const resultsController = require("../controllers/results");

router.get("/", resultsController.getAllResults);
router.post("/", resultsController.createResult);

module.exports = router;
