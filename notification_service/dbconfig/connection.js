const mongoose = require('mongoose');

const connect = async function () {
    try {
        const uri = process.env.MONGO_URI;

        if (!uri)
            throw new Error({ message: "Please provide the database connection string." });

        await mongoose.connect(uri);

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Notification database connected Successfully.');
        })

        connection.on('error', (err) => {
            console.log('Notification database is not connected. Please try again to connect:', err);
            process.exit(1);
        })

    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

module.exports = connect;