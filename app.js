const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const Patient = require('./models/Patient');
const Patients = require('./routes/Patients');
const dummyData = require('./dummyData')

app.use(express.json());
dotenv.config();

app.use('/api', Patients);

// dummyData();

mongodb_connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
}
mongodb_connect();

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})
