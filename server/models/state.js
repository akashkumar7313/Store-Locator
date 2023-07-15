const mongoose = require('mongoose');
const cities = require('./cities');

// state schema information 
const stateSchema = new mongoose.Schema({
    state_name: { 
        type: String,
        required: [true, 'state name required'], 
    },

    cities: [{      
        type: mongoose.Schema.Types.ObjectId,
        ref : 'citie', 
    }],
});

const state =  mongoose.model("state", stateSchema);


module.exports = state;

