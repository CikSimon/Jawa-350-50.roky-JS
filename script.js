
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
console.log("definovanie objektu")


let rulesAccepted = false;

function resetGame() {
    console.log("spustenie reset game")
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
    console.log("ukoncenie reset game")
    console.log("skuska resetu, hodnota playerscore:")
    console.log(gameData.playerScore)
    alert("RESET DONE, YOU WILL SEE THE RESULT IN NEXT ROUND")
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
        console.log("prve pridanie inputov:tu su:")
        console.log(gameData.rInput)
        console.log(gameData.pcInput)
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

    console.log("whowon prebehla")
    console.log(gameData)
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

    console.log("gameData:", gameData);

    acceptRulesFunction()
    
    let player = prompt("choose R, P, or S:")
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
    console.log("preslo volanie cChose generate, hodnota:")
    console.log(computer)
    
    whoWon()
    console.log("za funkciou whowon")
    
    console.log("gameData:", gameData);



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
    
    console.log("gameData:", gameData);

    gameData.roundCounter++;

    let rowsContainer = document.getElementById("rows")
    let newRow = document.createElement("div")
    newRow.textContent = "kolo " + gameData.roundCounter + ", hráč: " + gameData.pChose + ", počítač: " + gameData.cChose + ", vyhral: " + byidPlayerComputerWon
    rowsContainer.appendChild(newRow)

    console.log("gameData:", gameData);
}

