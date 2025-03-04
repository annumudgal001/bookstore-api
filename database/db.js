const mongoose = require('mongoose');
require('dotenv').config();  // Add this line to load the environment variables

const connecttodb = async () => {
    try {
        // Use the MONGODB_URI from the .env file
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);  // Exit the application with an error status code.
    }
};

module.exports = connecttodb;
