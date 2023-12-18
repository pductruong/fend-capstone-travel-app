const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
// const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
// app.use(express.static("dist/client"));
app.use(express.static("dist/client"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;

// Error-handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", function (req, res) {
  // res.sendFile("dist/index.html");
  res.sendFile(path.resolve(__dirname, "../client/view/index.html"));
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
