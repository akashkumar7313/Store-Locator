const express = require("express")


const router = express.Router();


const {createStore, getStore, getStoreById, updateStoreById, deleteStore } = require ('../controllers/storeController');



// create srote
router.post('/create/new/store', createStore);

// Read stores
router.get('/get/allstore', getStore);

// read store by id
router.get('/get/store/:id', getStoreById);

// update store
router.put('/update/store/:id', updateStoreById);

// delete store
router.delete('/delete/store/:id', deleteStore);




module.exports = router