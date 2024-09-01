require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const uri = `mongodb+srv://${process.env.MONGO_DB_NAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.l0zfpqw.mongodb.net/newsData?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database', error);
        process.exit(1);
    }
}

module.exports = connectDb;