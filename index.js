const express = require('express');
const dotenv = require('dotenv').config();
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json({ extended: false }));


app.use("/api/product", productRoute);
app.use("/api/user", userRoute);


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})