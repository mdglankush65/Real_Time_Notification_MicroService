const express = require('express');
const dotenv = require('dotenv');
const notifyRoutes = require('./routes/notification');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/notifiy/',notifyRoutes);

app.listen(port, ()=>{
    console.log(`Notification Service is connected on port ${port}`);
})