const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();

app.set("views", "public/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const guestsList = [];

app.use((req, res, next) => {
  req.guestsList = guestsList;
  next();
});

app.use(routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "views", "404.html"));
});

//insted of using hard coding for port number, use below
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running");
});
