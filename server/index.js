"use strict";

const express = require('express');
const sequelize = require("./sequelize");
const router = require('./routes/routes');
const cors = require('cors');


require("./models/vehicles");
require("./models/transports");
require("./models/stations");
require("./models/users");
require("./models/experience");


const app = express();
app.use(
    express.urlencoded({
        extended:true
    })
);
app.use(express.json());
app.use(cors());
const port = 7000;

app.use('/api', router);

//porinre conexiune catre baza de date
app.listen(port, async ()=> {
    console.log("Server started on http://localhost:7000");
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
    } catch(err) {
        console.log("Unable to connect to the database");
    }
})

