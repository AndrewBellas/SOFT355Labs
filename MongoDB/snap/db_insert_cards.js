var mongoose = require("mongoose");
var schemas = require("./schemas");

//mongodb+srv://AndrewBellas:<password>@soft355cluster-xo7b4.mongodb.net/test?retryWrites=true&w=majority

//var url = "mongodb+srv://USERNAME:PASSWORD@fullstackwebdev-" + 
//"zq9vu.azure.mongodb.net/Snap?retryWrites=true&w=majority";

var uri = "mongodb+srv://AndrewBellas:testPassword@soft355cluster-" + 
        "xo7b4.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});

for(i = 1; i < 53; i++){
    var card = new schemas.Card({"id": i,
            "filename": i.toString + ".png"});

    card.save();
}