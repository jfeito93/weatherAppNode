const request = require("request");
const argv = require('yargs').argv;

let apiKey = "afac8623ab9f86c35854602fd86f99d8";
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function (err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
