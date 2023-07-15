const mongoose = require('mongoose');

// City schema information
const citySchema = new mongoose.Schema({
    city_name: {
        type: String,
        required: [true],
    },
    stores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'store'
    }],
},{
    timestamps: true,
    get: time => time.toDateString()
 }
);

const cities = mongoose.model("citie", citySchema);

module.exports = cities;

