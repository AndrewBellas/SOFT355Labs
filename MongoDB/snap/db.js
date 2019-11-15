var mongoose = require("mongoose");
var schemas = require("./schemas");

var uri = "mongodb+srv://AndrewBellas:testPassword@soft355cluster-xo7b4.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});

async function getCard(id){
    return await schemas.Card.findOne({"id": id});
}

module.exports.getCard = getCard;