require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./route/auth-route");
const connectDb = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at Port: ${PORT}`);
    });
});