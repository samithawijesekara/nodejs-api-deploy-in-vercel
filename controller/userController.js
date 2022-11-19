const getUserData = async(req, res) => {
    try {
        res.status(200).json({
            status: "200",
            user_id: "U54898594454",
            name: "Samitha Wijesekara"
        })
    } catch (error) {
        res.status(500).json({
            status: "500",
            message: error
        })
    }
}

module.exports = {
    getUserData
}