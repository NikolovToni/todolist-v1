const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
 let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
 ];

 let today = new Date();
 let currentDay = today.getDay();

 res.render("list", {kindOfDay: weekDays[currentDay]});

});





app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});