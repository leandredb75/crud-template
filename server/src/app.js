// const express = require("express");
// const app = express();
// require("dotenv").config();

// //Settings
// app.set("port", process.env.PORT || 3000);

// //Middlewares
// app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("Hello World form NodeJS express.");
// });

// app.listen(app.get("port"), () => {
//   console.log("Start server on port " + app.get("port"));
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// env config
dotenv.config({
  path: path.resolve(__dirname, "../env"),
});

// Create an Express application
const app = express();

// Allow body to handle json data
app.use(bodyParser.json());

// Cors origin request
app.use(cors());

// Routes
// app.use("/", require("./routes"));
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello World form NodeJS express.");
});

app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});

module.exports = app;
