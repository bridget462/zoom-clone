const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("hello");
  next();
});

app.get("/", (req, res) => {
  res.send("this is root!");
});

app.get("/profile", (req, res) => {
  res.send("this is profile page!");
});

app.listen(3000);
