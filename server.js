/*
Link Of Cyclic Url: https://motionless-duck-helmet.cyclic.app/
*/




var express = require("express");
const path = require("path");
var app = express();

var httpOnPort = process.env.PORT || 8080;

function onHttpStart() {
  console.log("Express http server listening on: " + httpOnPort);
}

app.get("/", function(req,res){

    res.send("<body style='background: white;'><h2>Declaration </h2>" +
    "<p> I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically"+
    "<p>from any other source.</p>"+
    "<p>Name: <mark><b>Kush Patel</b></mark></p>"+
    "Student Number: <mark><b> 104006218</b></mark></p>"+
    "<p><a href='/test1'>Go to Test1</a></p></body>");
});

app.get('/test1', function(req, res) {
    res.sendFile(path.join(__dirname, '/pages/test1.html'));
  });


app.listen(httpOnPort, onHttpStart);
