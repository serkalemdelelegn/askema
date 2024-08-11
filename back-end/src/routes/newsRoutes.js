const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsControllers');
const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Get all news or news by id
router.get('/:newsId?', newsController.getNews);

// Create new news
router.post('/', upload.single('image'), newsController.createNews);

// Update news
router.put('/:newsId', upload.single('image'), newsController.updateNews);

// Delete news
router.delete('/:newsId', newsController.deleteNews);

module.exports = router;