const express = require("express");
const router = express.Router();
const log = console.log;
const Result = require("../models/result");
const Student = require("../models/student");
const Course = require("../models/course");

const { isMongooseError } = require("../utils/errorCheck");

router.get("/", async (req, res) => {
  try {
    const results = await Result.find({});

    const returnVal = [];

    for (const result of results) {
      const student = await Student.findById(result.student);
      const course = await Course.findById(result.course);

      returnVal.push({
        studentName: student.firstName + " " + student.familyName,
        result: result.score,
        course: course.name,
      });
    }

    res.send(returnVal);
  } catch (e) {
    log("Error fetching results", e.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const studentID = req.body["studentId"];
    const courseID = req.body["courseId"];

    const student = await Student.findById(studentID);
    const course = await Course.findById(courseID);

    if (!student || !course) {
      return res.status(404).send("Student or course not found");
    }

    const body = {
      student: studentID,
      course: courseID,
      score: req.body.score,
    };

    const result = new Result(body);
    await result.save();

    res.status(201).send(result);
  } catch (e) {
    log("Error creating result", e.message);

    isMongooseError(e)
      ? res.status(400).send(e.message)
      : res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
