
// main block
let player
let computer
let letters = ['R', 'P', 'S'];

let gameData = {
  playerScore: 0,
  computerScore: 0,
  playerWon: 0,
  computerWon: 0,
  pChose: "",
  cChose: "",
  rInput: 0,
  pInput: 0,
  sInput: 0,
  rcInput: 0,
  pcInput: 0,
  scInput: 0,
  roundCounter: 0,
}

let rulesAccepted = false;

function resetGame() {
    gameData.playerScore = 0
    gameData.computerScore = 0
    gameData.playerWon = 0
    gameData.computerWon = 0
    gameData.pChose = ""
    gameData.cChose = ""
    gameData.rInput = 0
    gameData.pInput = 0
    gameData.sInput = 0
    gameData.rcInput = 0
    gameData.pcInput = 0
    gameData.scInput = 0
    gameData.roundCounter = 0
}

function acceptRulesFunction() {
    if (!rulesAccepted) {
        let acceptRules = confirm("Do you know the rules?")
        if (acceptRules) {
            alert("Let's start the game!")
            rulesAccepted = true
            console.log("pravidla boli akceptovane")
            return
        } /* else {
            console.log("dostalo sa do else(pravidla)")
            alert("Here are the rules: CHOOSE R,P or SROCK = R,PAPER = P,SCISSORS = S,If you want reset the game, press RESET button,Whoever gets a score of 5 first wins,I hope you will understand the rest of the rules");
            alert("Let's start the game!")
            rulesAccepted = false
            console.log("pravidla neboli akceptovane ale boli vypisane")
        } */
    }
}

function whoWon() {
    if (player == computer) {
        alert("nobody won this round")
        console.log("nobody won this round")
    }

    if (player == "R" && computer == "P") {
        alert("computer won this round")
        gameData.computerScore++
        console.log("computer won this round")
        gameData.rInput++
        gameData.pcInput++
    }else if (player == "R" && computer == "S") {
        alert("you won this round")
        gameData.playerScore++
        console.log("you won this round")
        gameData.rInput++
        gameData.scInput++
    }else if (player == "P" && computer == "R") {
        alert("you won this round")
        gameData.playerScore++
        console.log("you won this round")
        gameData.pInput++
        gameData.rcInput++
    }else if (player == "P" && computer == "S") {
        alert("computer won this round")
        gameData.computerScore++
        console.log("computer won this round")
        gameData.pInput++
        gameData.scInput++
    }else if (player == "S" && computer == "R") {
        alert("computer won this round")
        gameData.computerScore++
        console.log("computer won this round")
        gameData.sInput++
        gameData.rcInput++
    }else if (player == "S" && computer == "P") {
        alert("you won this round")
        gameData.playerScore++
        console.log("you won this round")
        gameData.sInput++
        gameData.pcInput++
    }
    
    if (player == "S" && computer == "S") {
        gameData.sInput++
        gameData.scInput++
    }
    if (player == "R" && computer == "R") {
        gameData.rInput++
        gameData.rcInput++
    }
    if (player == "P" && computer == "P") {
        gameData.pInput++
        gameData.pcInput++
    }
}

function scoreFive() {
    if (gameData.playerScore == 5) {
        alert("YOU WON THIS MATCH")
        gameData.playerScore = 0
        gameData.computerScore = 0
        gameData.playerWon++
    }
    if (gameData.computerScore == 5) {
        alert("COMPUTER WON THIS MATCH")
        gameData.playerScore = 0
        gameData.computerScore = 0
        gameData.computerWon++
    }
    
}

function cChoseGenerate() {
    computer = letters[Math.floor(Math.random() * 3)]
    console.log("computer chose: " + computer)
    alert("computer chose: " + computer)
    return computer
}


function startGame() {
    acceptRulesFunction()
    
    player = prompt("choose R, P, or S:")
    if (player === null) {
        alert("You have canceled the input. The game will now exit.")
        return
    }
    player = player.toUpperCase()
    while (player !== "R" && player !== "P" && player !== "S") {
        if (player === null) { // cancel button
            alert("You have canceled the input. The game will now exit.")
            break; // stop code
        }
        alert("You entered an invalid value. Please choose R, P, or S.")
        player = prompt("Choose R, P, or S:")
    }
    console.log("player=" + player)
    cChoseGenerate()

    whoWon()

    alert("ROUND ended, if you want play next round press START button")

    scoreFive()

    let byidPlayerComputerWon = "";

    if (gameData.playerScore > gameData.computerScore) {
        byidPlayerComputerWon = "player";
    } else {
        byidPlayerComputerWon = "computer";
    }
    if (gameData.playerScore == gameData.computerScore) {
        byidPlayerComputerWon = "nikto(remiza)";
    }
    
    document.getElementById("player-score").innerHTML = gameData.playerScore
    document.getElementById("p-chose").innerHTML = gameData.player
    document.getElementById("computer-score").innerHTML = gameData.computerScore
    document.getElementById("c-chose").innerHTML = gameData.computer

    document.getElementById("r-input").innerHTML = gameData.rInput
    document.getElementById("s-input").innerHTML = gameData.sInput
    document.getElementById("p-input").innerHTML = gameData.pInput

    document.getElementById("player-won").innerHTML = gameData.playerWon

    document.getElementById("rc-input").innerHTML = gameData.rcInput
    document.getElementById("sc-input").innerHTML = gameData.scInput
    document.getElementById("pc-input").innerHTML = gameData.pcInput

    document.getElementById("computer-won").innerHTML = gameData.computerWon
    
    
    gameData.roundCounter++;

    let rowsContainer = document.getElementById("rows")
    let newRow = document.createElement("div")
    newRow.textContent = "kolo " + gameData.roundCounter + ", hráč: " + gameData.pChose + ", počítač: " + gameData.cChose + ", vyhral: " + byidPlayerComputerWon
    rowsContainer.appendChild(newRow)
}

