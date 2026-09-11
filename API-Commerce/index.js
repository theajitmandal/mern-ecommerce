import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import categoryRoute from "./routes/categoryRoute.js";

import bodyParser from "body-parser"


dotenv.config();

const app = express()
const port = process.env.PORT || 8000

// db connection
connectDB();

app.use(bodyParser.json())

app.use(express.json());
// listen to the port
app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`)
})

// using routes
app.use("/api", categoryRoute);

