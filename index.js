const express = require("express");

const app = express();

// Middlewares
app.use(express.static("public"));

// Routes
app.get("/", (_, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("*", (_, res) => {
  res.redirect("/");
});

// Initialization
app.listen(8080, () => {});
