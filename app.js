const express = require('express');
const app = express();
const conDB = require('./config/db')
require ('dotenv').config();


//Connect to MongoDB
conDB();


// define middleware
app.use(express.json());
app.use(express.urlencoded({ extanded: true }));


// store reoutes
const storeroute = require('./routes/storeRoutes')
app.use('/', storeroute);

// city routes
const cityroute = require('./routes/cityRoutes')
app.use('/', cityroute);

// // state routes
const stateroute = require('./routes/stateRoutes')
app.use('/', stateroute);


app.get('/', (request, response) => {
    response.send(`<h1>STORE LOCATOR </h1>`);
});



module.exports = app;