const express = require('express');
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        res.status(200).json({
            status: "200",
            message: "Everything is okay"
        })
    } catch (error) {
        res.status(500).json({
            status: "500",
            message: error
        })
    }
})

module.exports = router;