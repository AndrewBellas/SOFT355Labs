var gameModule = angular.module("game", ["ngRoute"]);

function updateCard(cardId){
    var src = "http://localhost:9005/card/" + cardId;
    $("#cardimg").attr("src", src);
    $(".card").css("visibility", "visible");
}

gameModule.component("game", {
    templateUrl: "components/game/game.template.html",

    controller: function GameController($scope, $http){
        $scope.initGame = function(){
            $http.get("/newgame").then(function(response){
                $("#gameId").html(response.data["gameId"]);
            });

        $scope.nextTurn = function(){
                $("#next").attr("disabled", true);
                var gameId = $("#gameId").html();
                var uri = "/nextcard/" + gameId + "/" + 2;

                $http.get(uri).then(function(response) {
                    updateCard(response.data["cardId"]);
                    $("#next").attr("disabled", false);
                });
            }, 5000;

            $scope.snap = function(){
                console.log("Snap!")
            }
        }
    }
})

