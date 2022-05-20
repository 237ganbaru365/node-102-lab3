const express = require("express");
const path = require("path");
const router = express.Router();

let guestsList = [];

router.get("/", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "public", "views", "home.html"));
});

router.get("/new-guest", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "public", "views", "new-guest.html"));
});

router.post("/new-guest", (req, res, next) => {
  const { guest } = req.body;
  const guestsList = req.guestsList;
  console.log(guestsList);

  guestsList.push(guest);
  res.redirect("/guests");
});

router.get("/guests", (req, res, next) => {
  const guestsList = req.guestsList;
  res.render("guests", { guestsList });
});

module.exports = router;
