// import dependencies and initialize the express router
const express = require('express');
const GitController = require('../controllers/git-controller');

const router = express.Router();

// define routes
router.get('', GitController.getIssues);
router.post('', GitController.createIssue);

module.exports = router;