const Store = require('../models/store');


// Create store
exports.createStore = async (req, res) => {
    try {
        const store = await Store.create(req.body);
        res.status(201).json({
            success: true,
            message: "Store created Successfully",
            store
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};


// Read store
exports.getStore = async (req, res) => {
    try {
        const stores = await Store.find();
        res.status(200).json({
            success: true,
            message: 'Stores retrieved successfully',
            stores
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

// read store by id
exports.getStoreById = async (req, res) => {
    try {
        const store = await Store.findById(req.params.id);;
        res.status(200).json({
            success: true,
            message: 'Store find successfully',
            store
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


// Update store
exports.updateStoreById = async (req, res) => {
    try {
        const store = await Store.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Store updated successfully",
            store
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


// delete store
exports.deleteStore = async (req, res) => {
    try {
        console.log(req.params.id);
        const store = await Store.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Store deleted successfully",
            store
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}