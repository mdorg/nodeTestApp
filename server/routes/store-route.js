// import dependencies and initialize the express router
const express = require('express');
const StoreController = require('../controllers/store-controller');

const router = express.Router();

// define routes
router.get('', StoreController.getItem);
router.post('', StoreController.storeItem);

module.exports = router;