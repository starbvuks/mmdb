const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT || 451;

mongoose.connect(
  `mongodb+srv://me:${PASSWORD}@mmdb.r1xr8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);

app.use("/", function (req, res, next) {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`connected to ${PORT}`);
});
