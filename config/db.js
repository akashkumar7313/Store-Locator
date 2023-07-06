const mongo = require('mongoose');
require ('dotenv').config();

const mongoURI = process.env.MONGO_URI || 4001;

const connectDB = () => {
    mongo.connect(mongoURI, {useNewUrlParser:true})
    .then(() =>{
        console.log("MongoDB connected..." )
    })
    .catch( err => {
        console.log(err.message)
    })
};

module.exports = connectDB;