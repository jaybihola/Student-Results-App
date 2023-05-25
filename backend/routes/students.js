const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/students");

router.get("/", studentsController.getAllStudents);
router.post("/", studentsController.createStudent);

module.exports = router;
