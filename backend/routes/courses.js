const express = require('express');
const router = express.Router();
const log = console.log;
const Course = require('../models/course');

const { isNetworkError, isMongooseError } = require('../utils/errorCheck');


router.get('/', async (req, res) => {
    // return all students as json
    try {
        const courses = await Course.find({});
        res.send(courses);
    } catch (e) {
        log("Error fetching courses", e.message);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    // create new student
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).send(course);
    }
    catch (e) {
        log("Error creating course", e.message);

        isMongooseError(e) ? res.status(400).send(e.message) : res.status(500).send('Internal Server Error');
    }
});

module.exports = router;