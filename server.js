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

// const OUTPUT_DIR = path.resolve(__dirname, "api");
// const outputPath = path.join(OUTPUT_DIR, "table.json");

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

  let results = reservation.push(data)

if (res.length < 5)  {

  fs.writeFileSync(outputPath, JSON.stringify(results), (err) => {
    if (err) throw err;
    console.log("You are booked!");
});

} 

else  {
  waitlist.push(data);
  res.json(false);
}



});

app.post("/api/clear", function(req,res) {
  reservation.length = [];
  waitlist.length = [];
  res.json({ ok: true });
});



// start app
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

