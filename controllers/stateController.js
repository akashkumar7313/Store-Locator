const State = require('../models/state');


// Create a new state
exports.createState = async (req, res) => {
    try {
        const state = await State.create(req.body);
            res.status(201).json()({
            success: true,
            message: "State created Successfully",
            state
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


// Read state
exports.getState = async (req, res) => {
    try {
        const states = await State.find().populate('cities');
        res.status(200).json({
            success: true,
            message: 'State retrieved successfully',
            states
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


// Update state
exports.updateStateById = async (req, res) => {
    try {
        const state = await State.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "State updated successfully",
            state
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


// delete state
exports.deleteState = async (req, res) => {
    try {
        const state = await State.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "State deleted successfully",
            state
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}