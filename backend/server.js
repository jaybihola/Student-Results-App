const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const log = console.log;

// get routers
const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/students');
const coursesRouter = require('./routes/courses');
const resultsRouter = require('./routes/results');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    log('Connected to MongoDB');
});

app.use('/', indexRouter);
app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/results', resultsRouter);

app.listen(process.env.PORT || 3030);

