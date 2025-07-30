const express = require('express');
const { uploadFile, listFiles } = require('../controllers/fileController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();
router.post('/upload', auth, uploadFile);
router.get('/list', auth, listFiles);
module.exports = router;
