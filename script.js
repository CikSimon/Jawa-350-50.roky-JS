    {/* <li>
        ROCK = 1
    </li>
    <li>
        PAPER = 2
    </li>
    <li>
        SCISSORS = 3
    </li> */}

var playerscore = 20
var computerscore = 30

var spanElement1 = document.getElementById("computer-score");
spanElement1.textContent = computerScore;

var spanElement2 = document.getElementById("player-score");
spanElement2.textContent = playerScore;

function mainfunction() {
    alert("this is the best game in the world")
    var player = prompt("choose 1,2 or 3:", "" )
    var computer = Math.floor(Math.random() * 3) + 1
    alert ("pc=" + computer)
    console.log("first part okay")
    
    if (player == 1 && computer == 2) {
        alert("computer won")
        computerscore = computerscore + 1
        console.log("computer won")

    }else if (player == 1 && computer == 3) {
        alert("you won")
        playerscore = playerscore + 1
        console.log("you won")
    }else if (player == 1 && computer == 1) {
        alert("nobody won")
        console.log("nobody won")
    
    
    
    }else if (player == 2 && computer == 1) {
        alert("you won")
        playerscore = playerscore + 1
        console.log("you won")
    }else if (player == 2 && computer == 2) {
        alert("nobody won")
        console.log("nobody won")
    }else if (player == 2 && computer == 3) {
        alert("computer won")
        computerscore = computerscore + 1
        console.log("computer won")
    
    
    
    }else if (player == 3 && computer == 1) {
        alert("computer won")
        computerscore = computerscore + 1
        console.log("computer won")
    }else if (player == 3 &&computer == 2) {
        alert("you won")
        playerscore = playerscore + 1
        console.log("you won")
    }else if (player == 3 && computer == 3) {
        alert("nobody won")
        console.log("nobody won")
    }

    alert("game ended, if you want play again press START button")
}
