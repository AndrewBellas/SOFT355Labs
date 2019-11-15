var express = require("express");
var logic = require("./logic");

var app = express();

app.use(express.static("resources"));

app.get("/card/:id", function(request, response){
    logic.getCard(request.params.id).then(function(card){
        response.redirect("/" + card.filename);
    });
});

app.listen(9000, function(){
    console.log("Listening on 9000...");
})