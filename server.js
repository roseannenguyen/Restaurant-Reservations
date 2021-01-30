var express = require("express");
var path = require("path");
var fs = require("fs");
const API_DIR = path.resolve(__dirname, "api");
const APIPath1 = path.join(API_DIR, "table");
const APIPath2 = path.join(API_DIR, "waitlist");
const reservation = require("./db.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api tables/waitlist
//Arrays that contain reservation and waitlist info

const waitlist = [];

//Homepage of the reservation system
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//Page where the reservation information is saved to the array
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//Pulls up list of reservations from array
app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

//Pulls up JSON list of waitlisted information from array
app.get("/api/waitslist", function (req, res) {
  res.json(waitlist);
});

//Pulls up JSON formatted reservation information
app.get("/api/table", function (req, res) {
  res.json(reservation);
});

// //Push/Post reservation information to the JSON table array
// app.post("/api/table", function(req, res) {
//   console.log(req.body)

// // end connection
//   res.end();
// })

//Push/Post reservation information to the JSON table array
app.post("/api/table", function(req, res) {
  console.log(req.body)
  reservation.push(req.body)
  fs.writeFileSync("db.json", JSON.stringify(reservation), err => {
    if (err) throw err;
    console.log("Data written to file.WAHOO!")
  })
// end connection
  res.end();
})

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
