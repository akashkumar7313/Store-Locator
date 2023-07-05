const express = require("express")


const router = express.Router();


const {createState, getState, updateStateById, deleteState } = require ('../controllers/stateController');



// create state
router.post('/create/new/state', createState);

// read state
router.get('/get/allstate', getState);

// update state
router.put('/update/state/:id', updateStateById);

// delete state
router.delete('/delete/state/:id', deleteState);


module.exports = router;