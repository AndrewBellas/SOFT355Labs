var http = require("http");
var fs = require("fs");

var port = 9000;

var server = http.createServer(function(request, response){
    fs.readFile("trains.json", function(err, contents){
        response.writeHeader(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
        response.write(contents);
        response.end();
    });
});

server.listen(port, function(){
    console.log("Listening on " + port);
});