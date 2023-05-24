const express = require('express');
const router = express.Router();
const log = console.log;
const Result = require('../models/result');
const Student = require('../models/student');
const Course = require('../models/course');

const { isNetworkError, isMongooseError } = require('../utils/errorCheck');

router.get('/', async (req, res) => {
    // return all students as json
    try {
        const results = await Result.find({});
        res.send(results);
    } catch (e) {
        log("Error fetching results", e.message);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    // create new student
    try {
        const studentName = req.body["student"];
        const courseName = req.body["course"];

        const student = await Student.findOne({firstName: studentName});
        const course = await Course.findOne({name: courseName});

        if (!student || !course) {
            return res.status(404).send('Student or course not found');
        }

        log("Student", student);
        log("Course", course);

        const body = {
            student: student._id, course: course._id, score: req.body.score
        }

        const result = new Result(body);
        await result.save();
        res.status(201).send(result);
    }
    catch (e) {
        log("INSIDE ERROR CATCH")
        log("Error creating result", e.message);

        isMongooseError(e) ? res.status(400).send(e.message) : res.status(500).send('Internal Server Error');
    }
});

module.exports = router;