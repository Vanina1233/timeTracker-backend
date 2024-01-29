const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const db = require("./config/database");

//setting up the port
const PORT = process.env.PORT || 8080;

//assigning the variable app to express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
  console.log("db has been re sync");
});

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
