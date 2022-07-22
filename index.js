console.log("Tina Service Running...");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//importing all the routes
const fetchTina = require("./src/views/fetchTina");

//config dotenv
dotenv.config();
//cors
app.use(cors());
//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//variables
const port = process.env.PORT || 3001;

//app routes
app.get("/", (req, res) => {
  res.send("Tina Service Running...");
});
app.use("/api/v1/tina/", fetchTina);

//listeing to the port
app.listen(port, () => {
  console.log(`Tina Service is running on port ${port}`);
});
