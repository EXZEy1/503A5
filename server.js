const express = require('express');
const dotenv = require('dotenv');
const hospitals = require('./routes/hospitals');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

app.use('/api/v1/hospitals', hospitals);


const PORT = process.env.PORT || 5003;
app.listen(PORT, console.log('Server running in', process.env.NODE_ENV,' mode on port', PORT));
