
// importing dependencies
require("dotenv").config();
var request = require("request");
var keys = require("./keys");

var request = require("request");
var fs = require("fs");

// using omdb api to get movies info
var getMeMovie = function(movieName) {
    if (movieName === undefined) {
      movieName = "Mr Nobody";
    }
var queryUrl = "http://www.omdbapi.com/?t=" + movies + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl);

request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {


        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[0].Value);
        console.log("Country of Production: " + JSON.parse(body).Country);
        console.log("Movie Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
    }
    console.log(request);

});
}