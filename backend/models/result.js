const { mongoose} = require('../db/mongoose');

const resultSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: [true, "Student is required."]
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: [true, "Course is required."]
    },
    score: {
        type: String,
        required: [true, "Score is required."],
        validate: {
            validator: function (value) {
                return ['A', 'B', 'C', 'D', 'E', 'F'].includes(value);
            }
        }
    },
    // _id: String
});

module.exports = mongoose.model('Result', resultSchema);