const mongoose  = require('mongoose');

const async function connect (){
    try {
        const uri = process.env.MONGO_URI;

        if(!uri)
            throw new Error({message:"Please provide the database connection string."});

        await mongoose.connect();

        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('Notification database connected Successfully.');
        })

        connection.on('error',(err)=>{
            console.log('Notification database is not connected. Please try again to connect:',err);
            process.exit(1);
        })

    } catch (error) {
        console.error("Error connecting to the database:",err);   
    }
}

module.exports = connect;