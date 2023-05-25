const Course = require("../models/course");

const log = console.log;

const { isMongooseError } = require("../utils/errorCheck");

async function getAllCourses(req, res) {
  try {
    const courses = await Course.find({});
    res.send(courses);
  } catch (e) {
    log("Error fetching courses", e.message);
    res.status(500).send("Internal Server Error");
  }
}

async function createCourse(req, res) {
  try {
    const course = new Course(req?.body);
    await course.save();
    res.status(201).send(course);
  } catch (e) {
    log("Error creating course", e.message);

    isMongooseError(e)
      ? res.status(400).send(e.message)
      : res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  getAllCourses,
  createCourse,
};
