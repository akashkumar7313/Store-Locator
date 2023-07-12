const express = require('express');
const app = express();
const conDB = require('./config/db');


//Connect to MongoDB
conDB();


// define middleware
app.use(express.json());
app.use(express.urlencoded({ extanded: true }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });



// store reoutes
const storeroute = require('./routes/storeRoutes')
app.use('/', storeroute);

// // city routes
// const cityroute = require('./routes/cityRoutes')
// app.use('/', cityroute);

// // state routes
// const stateroute = require('./routes/stateRoutes')
// app.use('/', stateroute);


app.get('/', (request, response) => {
    response.send(`<h1>STORE LOCATOR </h1>`);
});



module.exports = app;