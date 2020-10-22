// import dependencies and initialize the express router
const express = require('express');
const LogoController = require('../controllers/logo-controller');

const router = express.Router();

// define routes
router.get('', LogoController.getLogo);

module.exports = router;
