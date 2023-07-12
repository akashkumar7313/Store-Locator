const mongoose = require('mongoose');

// store schema information
const storeSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    address: {
        type: String,  
        required: [true]
    },
    day: {
        type: String,
        required: [true]
    },
    time: {
        type: String,
        required: [true]
    },
    contact: {
        type: Number,
        required: [true]
    }, 
     
},{
    timestamps: true,
    get: time => time.toDateString()
 }
);

const store =  mongoose.model("store", storeSchema)

module.exports = store;




