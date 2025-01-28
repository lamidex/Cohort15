const express = require('express');
const morgan = require('morgan');
const subtractStudents = require('./qui2');


const app = express();
app.use(morgan('dev'));
const port = 4000;

app.get('/',(req, res) => {
    res.send('This is a test server');
})

app.get('/subtractStudents',(req, res) => {
    const students = subtractStudents(3, 2);
    console.log(students);
    res.json(students);
    })
    app.listen(port, () => {
        console.log(`This server is running on port ${port}`);
        
    })