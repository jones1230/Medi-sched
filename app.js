const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const Patients = require('./routes/Patients');
const authStaff = require('./routes/authStaff');

app.use(express.json());
dotenv.config();
app.use(morgan('common'));

app.use('/api', Patients);
app.use('/api/auth', authStaff);

mongodb_connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
}
mongodb_connect().then(() => {
    console.log('Database is connected');
});

app.listen(5000, () => {
    console.log('Server running on port http://localhost:5000/');
})
