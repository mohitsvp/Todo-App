import express from "express";
import { connect } from "./Database/db.js";

import cors from 'cors'
import routes from "./routes/routes.js";

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// All Routes
app.use("/", routes)


const PORT = 8080;


app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`)
})