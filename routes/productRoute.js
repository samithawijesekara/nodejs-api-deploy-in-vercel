const express = require('express');
const router = express.Router();
const { getProductData } = require('../controller/productController');

router.get("/", getProductData);

module.exports = router;