const { mongoose} = require('../db/mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Course name is required."]
    },
});

module.exports = mongoose.model('Course', courseSchema);