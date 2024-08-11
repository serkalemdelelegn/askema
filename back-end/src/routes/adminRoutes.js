const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');

// Create new admin
router.post('/', adminController.createAdmin);

router.post('/checkCredentials', adminController.checkCredentials);

module.exports = router;