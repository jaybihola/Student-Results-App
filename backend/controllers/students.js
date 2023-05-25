const Student = require("../models/student");
const log = console.log;

const { isMongooseError } = require("../utils/errorCheck");

async function getAllStudents(req, res) {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (e) {
    log("Error fetching students", e.message);
    res.status(500).send("Internal Server Error");
  }
}

async function createStudent(req, res) {
  try {
    const student = new Student(req?.body);
    await student.save();
    res.status(201).send(student);
  } catch (e) {
    log("Error creating student", e.message);

    isMongooseError(e)
      ? res.status(400).send(e.message)
      : res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  getAllStudents,
  createStudent,
};
