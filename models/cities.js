const mongoose = require('mongoose');

// City schema information
const citySchema = new mongoose.Schema({
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'state'
    },
    city_name: {
        type: String,
        required: [true],
    },
    stores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'store'
    }],
});

const cities = mongoose.model("citie", citySchema);

module.exports = cities;

