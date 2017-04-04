const fs = require("fs");
const spotify = require("spotify");
const twitter = require("twit");
const request = require('request');
const stuff = require('./key');
const express = require('express');
const filename = "random.txt";



if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
        if (err) {
            console.log("error ocurred: " + err);
            return;
        } else {
            // console.log(data.tracks.items[1]);
            console.log(data.tracks.items[1].artists[0].name)
            console.log(data.tracks.items[1].name);
            console.log(data.tracks.items[1].preview_url);
            console.log(data.tracks.items[1].album.name);
            console.log("-----------------------")
        };
    })
}

if (process.argv[2] === "movie-this") {
    request("http://www.omdbapi.com/?t=" + process.argv[3], function(err, res, body) {
        if (!err) {
            var theBody = JSON.parse(body);
            console.log(theBody.Title);
            console.log(theBody.Year);
            console.log(theBody.imdbRating);
            console.log(theBody.Country);
            console.log(theBody.Language);
            console.log(theBody.Plot);
            console.log(theBody.Actors);
            console.log(theBody.Ratings[1].value);
            console.log('https://www.rottentomatoes.com/m/' + process.argv[3]);
            console.log("------------------------");


        } else { console.log(err) };
    })

}

if (process.argv[2] === "do-what-it-says") {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        process.argv[2] = filename[0];
        process.argv[3] = filename[1];
        console.log("Ok: " + filename);
        console.log(data);
        console.log(filename[1]);
    })
}
// conso
le.log(process.argv[2], process.argv[3]);
