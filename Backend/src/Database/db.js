const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { autoIndex: true });
        console.log('mongodb connection established');
    } catch (error) {
        console.log('error occurred in connection of db');
    }
};

module.exports = connectDB;