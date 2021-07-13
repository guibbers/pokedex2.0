const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const PORT = process.env.PORT || 3000
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const database = require("./app/config/dbconfig");

// Init Database
database.init()

app.listen(3000, ()=>{
   console.log(`Server Running on Port ${PORT}`)
});