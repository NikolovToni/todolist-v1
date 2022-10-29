const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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

 res.send(`<h1>Its ${weekDays[currentDay]}!</h1>`)

});





app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});