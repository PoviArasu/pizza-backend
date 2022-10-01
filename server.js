//import express from 'express'
const express = require("express");
const mongoose = require("mongoose");
const pizzaModel = require("./models/pizzaModel.js");
const pizzasRoute = require('./routes/pizzaRoute.js');
const userRoute = require('./routes/userRoute.js');
const orderRoute = require('./routes/orderRoute.js');

//Create DB Connection
const MONGODB_URI = "mongodb+srv://mongodbatlas:password@007@cluster0.x7uxbn6.mongodb.net/pizza?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err.message);
})

/*
This time I will not create seedRoutes to create an automatic table in the database.
You can see how it works in some of the previous tutorials.

Now I will show you something new, that is, how to insert inside mongodb json file.

So EASY
*/


//create port and server
const app = express();
app.use(express.json());

app.use('/api/pizzas/', pizzasRoute); ///api/pizzas/getpizzas
app.use('/api/users/', userRoute);
app.use('/api/orders/', orderRoute);

app.get("/", (req, res) => {
    res.send("Server in running!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});