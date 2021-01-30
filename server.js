var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api tables/waitlist

var newReservation = [
  {
    customerName: "Josh",
    phoneNumber: "1234436",
    customerEmail: "fun@gmail.com",
    customerID: 1,
  },
  {
    customerName: "Andrew",
    phoneNumber: "0986748",
    customerEmail: "fun@gmail.com",
    customerID: 2,
  },
  {
    customerName: "Skye",
    phoneNumber: "345678678",
    customerEmail: "fun@gmail.com",
    customerID: 3,
  }
];


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
