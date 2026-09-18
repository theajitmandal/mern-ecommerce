import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js"

import bodyParser from "body-parser"
import morgan from "morgan";

dotenv.config();

const app = express()
const port = process.env.PORT || 8000

// db connection
connectDB();

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(express.json());
// listen to the port
app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`)
})

// using routes
app.use("/api", categoryRoute);
app.use("/api", productRoute)

