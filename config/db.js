const mongoose = require('mongoose');


const connectDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/ch15');
    console.log('connected to database');
    };
    module.exports = connectDb();