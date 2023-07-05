const express = require("express")


const router = express.Router();


const {createCity, getCity, updateCityById, deleteCity } = require ('../controllers/citiesController');



// create city
router.post('/create/new/city', createCity);

//  read city
router.get('/get/allcity', getCity);

//  update city
router.put('/update/city/:id', updateCityById);

// delete city
router.delete('/delete/city/:id', deleteCity);




module.exports = router;