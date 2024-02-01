




function getComputerChoice() {}

function singleRound() {}

var p1Score = 0
var cpuScore = 0
var round = 0

$("#button").on("click", function() {
    // If the enter button is clicked, call the function
    p1Box();
    p2Box()
    roundResults()
});
$("#userInput").keypress(function(event) {
    if (event.which === 13) {
        // If Enter key is pressed, call the function
        p1Box()
        p2Box();
        roundResults()
    }})




function p1Box() {
    var userInput = $("#userInput").val().toLowerCase();

    if (userInput === "rock"){
        $("#P1").text("🪨");
    }else if (userInput === "paper"){
        $("#P1").text("📄");
    }else if (userInput === "scissors"){
        $("#P1").text("✂️");
    }
}


function p2Box(){
    var n = Math.random()
    var cpuInput = Math.floor(n * 3) + 1

    if (cpuInput === 1){
        $("#CPU").text("🪨");
    }else if (cpuInput === 2){
        $("#CPU").text("📄");
    }else if (cpuInput === 3){
        $("#CPU").text("✂️");
    }

}


function roundResults() {
    console.log("test")

    var cpu = $("#CPU").text()
    var p1 = $("#P1").text()

    if (p1 === "🪨" && cpu === "✂️"){
        //P1
        $("#level-round").text("ROUND: " + ++round);
        $("#level-score").text(++p1Score + "-" + cpuScore);
        $("#P1").css("background-color", "lightgreen");
        $("#CPU").css("background-color", "white");
    }else if (p1 === "🪨" && cpu === "📄"){
        //CPU
        $("#level-round").text("ROUND: " + ++round);
        $("#level-score").text(p1Score + "-" + ++cpuScore);
        $("#CPU").css("background-color", "lightgreen");
        $("#P1").css("background-color", "white");
    }else if (p1 === "🪨" && cpu === "🪨"){
        //tie
        $("#level-score").text(p1Score + "-" + cpuScore);
        $("#P1").css("background-color", "white");
        $("#CPU").css("background-color", "white");
    }else if (p1 === "📄" && cpu === "✂️"){
        //CPU
        $("#level-round").text("ROUND: " + ++round);
        $("#level-score").text(p1Score + "-" + ++cpuScore);
        $("#CPU").css("background-color", "lightgreen");
        $("#P1").css("background-color", "white");
    }else if (p1 === "📄" && cpu === "📄"){
        //tie
        $("#level-score").text(p1Score + "-" + cpuScore);
        $("#P1").css("background-color", "white");
        $("#CPU").css("background-color", "white");
    }else if (p1 === "📄" && cpu === "🪨"){
        //P1
        $("#level-round").text("ROUND: " + ++round);
        $("#level-score").text(++p1Score + "-" + cpuScore);
        $("#P1").css("background-color", "lightgreen");
        $("#CPU").css("background-color", "white");
    }else if (p1 === "✂️" && cpu === "✂️"){
        //tie
        $("#level-score").text(p1Score + "-" + cpuScore);
        $("#P1").css("background-color", "white");
        $("#CPU").css("background-color", "white");
    }else if (p1 === "✂️" && cpu === "📄"){
        //P1
        $("#level-round").text("ROUND: " + ++round);
        $("#level-score").text(++p1Score + "-" + cpuScore);
        $("#P1").css("background-color", "lightgreen");
        $("#CPU").css("background-color", "white");
    }else if (p1 === "✂️" && cpu === "🪨"){
        //CPU
        $("#level-round").text("ROUND: " + ++round);
        $("#level-score").text(p1Score + "-" + ++cpuScore);
        $("#CPU").css("background-color", "lightgreen");
        $("#P1").css("background-color", "white");
    }


}