// FILE: src/routes/index.routes.js
const express = require('express');
const router = express.Router();
const docsController = require('../controllers/docs.controller');

router.get('/', docsController.getApiDocs);

module.exports = router;