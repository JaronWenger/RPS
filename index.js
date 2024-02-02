var p1Score = 0
var cpuScore = 0
var round = 0
var gameEnded = false



// $("#button").on("click", function() {
//     // If the enter button is clicked, call the function
//     p1Box();
//     p2Box()
//     roundResults()
// });
// $("#userInput").keypress(function(event) {
//     if (event.which === 13) {
//         // If Enter key is pressed, call the function
//         p1Box()
//         p2Box();
//         roundResults()
//     }})


$(document).ready(function() {
    // Attach click event handler to the heading element
    $("#heading").click(function() {
        // Refresh the page when the heading is clicked
        location.reload();
    });

    // Your existing code
});
    






    $(document).ready(function() {
        // Event listeners for the buttons
        $("#rock").click(function() {
            p1Box("rock");
            p2Box()
            roundResults()
        });
    
        $("#paper").click(function() {
            p1Box("paper");
            p2Box()
            roundResults()
        });
    
        $("#scissors").click(function() {
            p1Box("scissors");
            p2Box()
            roundResults()
        });
    
        // Your other game logic goes here
    });









function p1Box(prop) {
    var userInput = prop

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

    if (p1Score === 5 && gameEnded === false) {
        $("#heading").text("You Win!");
        gameEnded = true
    } else if (cpuScore === 5 && gameEnded === false) {
        $("#heading").text("Game Over");
        gameEnded = true
    }
}