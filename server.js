var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservation = [];
const waitlist = [];
let people = 0;


//Homepage of the reservation system
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  people++;
});

//Page where the reservation information is saved to the array
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//Pulls up list of reservations from array
app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});



app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

app.get("/api/table", function (req, res) {
  return res.json(reservation);
});




app.post("/api/table", function (req, res) {

  var data = req.body

  if (people.length < 5) {

    reservation.push(data)
    res.json(true)

  }

  else {
    waitlist.push(data)
    res.json(false)

  }

});


app.post("/api/clear", function (req, res) {

  reservation.length = [];
  waitlist.length = [];
  people.length = 0;

  res.json({ ok: true })
});



// start app
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

