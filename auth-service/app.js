const express = require('express');
const dotenv = require('dotenv');
const connect = require('./dbConfig/connection.js');
const authRoutes = require('./routes/auth.js');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 8000;

// Connecting to the database
connect();

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Auth_Servie is listening on port: ${port}`);
})