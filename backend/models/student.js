const { mongoose} = require('../db/mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."]
    },
    familyName: {
        type: String,
        required: [true, "Family name is required."],
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Date of birth is required."],
        validate: {
            validator: function (value) {
                // age more than 10
                let curr = new Date();
                let diff = curr.getTime() - value.getTime();
                let yr = Math.abs(new Date(diff).getFullYear() - 1970);
                return yr >= 10;
            }
        }
    },
});

module.exports = mongoose.model('Student', studentSchema);