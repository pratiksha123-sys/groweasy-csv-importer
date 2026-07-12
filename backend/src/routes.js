const express = require('express');
const multer = require('multer');
const { uploadAndPreview, confirmAndProcess } = require('./controllers/csv.controller');

const router = express.Router();
const upload = multer({ limits: { fileSize: 5 * 1024 * 1024 } }); // Limit 5MB files

router.post('/csv/preview', upload.single('file'), uploadAndPreview);
router.post('/csv/confirm', confirmAndProcess);

module.exports = router;