const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/courses");

router.get("/", coursesController.getAllCourses);
router.post("/", coursesController.createCourse);

module.exports = router;
