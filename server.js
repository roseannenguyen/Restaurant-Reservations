var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api tables/waitlist

const reservation = [];


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});



app.post("/api/table", function(req, res) {
  console.log(req.body)




// end connection
  res.end();
})




app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
