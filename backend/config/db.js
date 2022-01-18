const mongoose = require('mongoose');
const dotenv=require('dotenv').config();
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log(`Connected :${conn.connection.host}`)
    } catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    }
}
module.exports = connectDb;