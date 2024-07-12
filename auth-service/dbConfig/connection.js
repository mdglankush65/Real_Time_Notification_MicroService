const mongoose = require("mongoose");

async function connect() {
    try {
        const uri = process.env.MONGO_URI;

        if (!uri) {
            throw new Error("MONGO_URI environment variable is not defined");
        }

        await mongoose.connect(uri);
        console.log("Hi! I am connected now.");
        
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("User database is connected successfully.");
        });

        connection.on('error', (err) => {
            console.error("User database not connected. Please ensure you are connected to MongoDB.", err);
            process.exit(1);
        });

    } catch (error) {
        console.error("There is an error connecting to the user database:", error);
        process.exit(1);
    }
}

module.exports = connect;