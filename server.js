const express = require("express");
const app = express();
// server used for socket io
const server = require("http").Server(app);
const io = require("socket.io")(server);
// to create unique room id
const { v4: uuidV4 } = require("uuid");

app.set("view engine", "ejs");
app.use(express.static("public"));

// server create unique room URL and redirect user
app.get("/", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

server.listen(3000);
