'use strict';
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/studentdata', { useNewUrlParser: true});

module.exports = { mongoose }