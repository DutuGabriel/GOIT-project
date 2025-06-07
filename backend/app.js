const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ptr rute

module.exports = app;
