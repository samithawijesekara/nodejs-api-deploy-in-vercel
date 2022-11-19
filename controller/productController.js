const getProductData = async(req, res) => {
    try {
        res.status(200).json({
            status: "200",
            product_id: "795732957045",
            name: "Sun wash cream"
        })
    } catch (error) {
        res.status(500).json({
            status: "500",
            message: error
        })
    }
}

module.exports = {
    getProductData
}