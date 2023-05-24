const express = require('express');
const router = express.Router();
const log = console.log;
const Student = require('../models/student');
const {db} = require('../server')

const { isNetworkError, isMongooseError } = require('../utils/errorCheck');


router.get('/', async (req, res) => {
    // return all students as json
    try {
        const students = await Student.find({});
        log(students)
        res.send(students);
    } catch (e) {
        log("Error fetching students", e.message);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
   // create new student
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    }
    catch (e) {
        log("Error creating student", e.message);

        isMongooseError(e) ? res.status(400).send(e.message) : res.status(500).send('Internal Server Error');

    }
});

module.exports = router;