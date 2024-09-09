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

mongodb_connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
}
mongodb_connect().then(() => console.log('Connected to database'));

app.listen(5000, () => {
    console.log('Server running on port http://localhost:5000/');
})
