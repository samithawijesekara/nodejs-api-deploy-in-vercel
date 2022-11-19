const express = require('express');
const productRoute = require('./routes/productRoute');

const app = express();
app.use(express.json({ extended: false }));


app.use("/api/product", productRoute);


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})