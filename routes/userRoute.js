const express = require('express');
const router = express.Router();
const { getUserData } = require('../controller/userController');

router.get("/", getUserData);

module.exports = router;