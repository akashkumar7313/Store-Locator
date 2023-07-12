

// Import necessary modules and models
const City = require('../models/cities');

// Create a new city
const createCity = async (req, res) => {
    try {
        const city = await City.create({
            city_id: req.body.city_id,
            city_name: req.body.city_name,
        });

        return res.status(201).json({
            success: true,
            message: "City created successfully",
            city,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}


// Retrieve all cities
const getCity = async (req, res) => {
    try {
        const cities = await City.find();
        return res.status(200).json({
            success: true,
            message: "Cities Retrive Successfully",
            cities
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message, 
        })
    }
};


// Update a city by ID
const updateCityById = async (req, res) => {
    try {
        const city = await City.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "city updated successfully",
            city
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

// Delete a city by ID
const deleteCity = async (req, res) => {
    try {
        const { id } = req.params;

        const city = await City.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "city deleted successfully",
            city
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

// Export the controller functions
module.exports = {
    createCity,
    getCity,
    updateCityById,
    deleteCity,
};



// Create city
// exports.createcity = async (req, res) => {
//     try {
//         const city = await City.create({
//             city_id:req.body.city_id,
//             city_name:req.body.city_name
//         })
//         const cityData = await city.save()
//         // const city = await city.create(req.body);
//         return res.send(cityData);
//         res.status(201).json({
//             success: true,
//             message: "city created Successfully",
//             city
//         })

//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }


// // Read cities
// exports.getcities = async (req, res) => {
//     try {
//         const cities = await City.find();
//         res.status(200).json({
//             success: true,
//             message: 'citys retrieved successfully',
//             cities
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }


// // Update cities
// exports.updatecityById = async (req, res) => {
//     try {
//         const city = await City.findByIdAndUpdate(req.params.id, req.body);
//         res.status(200).json({
//             success: true,
//             message: "city updated successfully",
//             city
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }


// // delete citys
// exports.deletecity = async (req, res) => {
//     try {
//         const city = await City.findByIdAndDelete(req.params.id);
//         res.status(200).json({
//             success: true,
//             message: "city deleted successfully",
//             city
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }