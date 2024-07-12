const express = require('express');
const dotenv = require('dotenv');
const connect = require('./dbconfig/connection');
const notifyRoutes = require('./routes/notification');

dotenv.config();

const port = process.env.PORT || 8001;

const app = express();

app.use(express.json());

connect();

app.use('/api/notification/',notifyRoutes);

app.listen(port, ()=>{
    console.log(`Notification Service is connected on port ${port}`);
})