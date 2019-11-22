var schemas = require("./schemas");


function deal() {
    // Initialise the deck.
    var cards = new Array();
    for (i=0; i<52; i++) {
        cards.push(i+1);
    }

    // Shuffle the cards - shuffle algorithm from Donald Knuth.
    for (i=cards.length-1; i>0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = cards[j];
        cards[j] = cards[i];
        cards[i] = temp;
    }

    // Return the cards.
    return cards;
}


async function newGame() {
    // Deal the cards.
    var cards = deal();

    // Initialise a new game.
    var game = new schemas.Game({
        gameId: 0,      // TODO: Fix this.
        player1: cards.slice(0, 26),
        player2: cards.slice(26, 52),
        mainPile: []
    });

    // Save the game then return it.
    await game.save();
    return game;
}

async function nextTurn(gameId, player){
    var game = await db.getGame(gameId);

    var cardId;
    if (player == 1){
        cardId = game.player1.pop();
    } else {
        cardId = game.player2.pop();
    }
    game.mainPile.push(cardId);

    await game.save();

    var card = await db.getCard(cardId);

    return card;
}

module.exports.nextTurn = nextTurn;

module.exports.newGame = newGame;