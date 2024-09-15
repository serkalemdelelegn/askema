const express = require('express');
const multer = require('multer');
const clientController = require('../controllers/clientControllers');
const router = express.Router();

const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });


router.get('/:id?', clientController.getClient);
router.post('/', upload.single('image'), clientController.createClient);
router.put('/:id', upload.single('image'), clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
