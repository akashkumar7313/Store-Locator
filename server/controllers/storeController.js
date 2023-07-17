const Store = require('../models/store');


// Create store
exports.createStore = async (req, res) => {
    try {
      const { name, address, contact } = req.body;
  
      // Check if store with the same name already exists
      const existingStoreName = await Store.findOne({ name: name });

    if (existingStoreName) {
      return res.status(400).json({
        success: false,
        message: "Store name can't be same as existing store name",
      });
    }

    // Check if Address is already used by any existing store
    const existingStoreAddress = await Store.findOne({ address: address });

    if (existingStoreAddress) {
      return res.status(400).json({
        success: false,
        message: "Address can't be same as exiting store address ",
      });
    }

    // Check if contact is already used by any existing store
    const existingStoreContact = await Store.findOne({ contact: contact });

    if (existingStoreContact) {
      return res.status(400).json({
        success: false,
        message: "Contact must be unique",
      });
    }
  
      const store = await Store.create(req.body);
      res.status(201).json({
        success: true,
        message: "Store created successfully",
        store,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
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
        const store = await Store.findById(req.params.id).populate('stores');
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