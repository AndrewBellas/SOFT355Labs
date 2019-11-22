var express = require("express");
var mongoose = require("mongoose");
var db = require("./db");
var logic = require("./logic");

var uri = "mongodb+srv://AndrewBellas:testPassword@soft355cluster-xo7b4.mongodb.net/test?retryWrites=true&w=majority"; // YOU MUST ADD YOUR OWN CONNECTION STRING HERE.

var app = express();

app.use(express.static("resources"));

app.get("/card/:id", function(request, response) {
    db.getCard(request.params.id).then(function(card) {
        console.log(card.filename);
        response.redirect("/" + card.filename);
    });
});

app.get("/newgame", function(request, response) {
    logic.newGame().then(function(game) {
        console.log("created a new game: " + game._id);
    });
})

app.listen(9000, function() {
    // Connect to Mongoose.
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
        console.log("Connected to DB");
    });

    // Some output for the interested reader...
    console.log("Listening on 9000");
})

app.use(express.static("client"));

app.get("/", function(request, response) {
    response.status(200).sendFile("/", {root: "client"});
});