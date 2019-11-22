var mongoose = require("mongoose");

var Card = mongoose.model("Card", {id: Number, filename: String});

var Game = mongoose.model("Game", {
    gameId: Number,
    mainPile: [Number],
    player1: [Number],
    player2: [Number]
});

module.exports.Card = Card;
module.exports.Game = Game;