// main block
let playerScore = 0
let computerScore = 0
let pChose = ""
let cChose = ""

let rInput = 0
let pInput = 0
let sInput = 0

let rcInput = 0
let pcInput = 0
let scInput = 0


let playerWon = 0
let computerWon = 0 

let rulesAccepted = false;

let computerWonElement = document.getElementById("computer-won")
let playerWonElement = document.getElementById("player-won")

let computerScoreElement = document.getElementById("computer-score")
let playerScoreElement = document.getElementById("player-score")

let pChoseElement = document.getElementById("p-chose")
let cChoseElement = document.getElementById("c-chose")

let rInputElement = document.getElementById("r-input")
let pInputElement = document.getElementById("p-input")
let sInputElement = document.getElementById("s-input")

let rcInputElement = document.getElementById("rc-input")
let pcInputElement = document.getElementById("pc-input")
let scInputElement = document.getElementById("sc-input")

let letters = ['R', 'S', 'P']
let computer = letters[Math.floor(Math.random() * 3)]

function resetGame() {
    playerScore = 0
    computerScore = 0
    playerWon = 0
    computerWon = 0
    pChose = ""
    cChose = ""
    rInput = 0
    pInput = 0
    sInput = 0

    rcInput = 0
    pcInput = 0
    scInput = 0

    alert("RESET DONE, YOU WILL SEE THE RESULT IN NEXT ROUND")
}

function startGame() {
    pChose = ""
    cChose = ""

    computerWonElement = document.getElementById("computer-won")
    playerWonElement = document.getElementById("player-won")

    computerScoreElement = document.getElementById("computer-score")
    playerScoreElement = document.getElementById("player-score")

    pChoseElement = document.getElementById("p-chose")
    cChoseElement = document.getElementById("c-chose")

    rInputElement = document.getElementById("r-input")
    pInputElement = document.getElementById("p-input")
    sInputElement = document.getElementById("s-input")

    rcInputElement = document.getElementById("rc-input")
    pcInputElement = document.getElementById("pc-input")
    scInputElement = document.getElementById("sc-input")

    if (!rulesAccepted) {
        let acceptRules = confirm("Do you know the rules?");
        if (acceptRules) {
            alert("Let's start the game!");
            rulesAccepted = true;
        } else {
            alert("Here are the rules: CHOOSE R,P or SROCK = R,PAPER = P,SCISSORS = S,If you want reset the game, press RESET button,Whoever gets a score of 5 first wins,I hope you will understand the rest of the rules");
            alert("Let's start the game!");
            return
        }
    }


    let player = prompt("choose R, P, or S:");
    if (player === null) {
        alert("You have canceled the input. The game will now exit.");
        return
    }
    while (player !== "R" && player !== "P" && player !== "S") {
        if (player === null) { // cancel button
            alert("You have canceled the input. The game will now exit.");
            break; // stop code
        }
        alert("You entered an invalid value. Please choose R, P, or S.");
        player = prompt("Choose R, P, or S:");
    }
    console.log("player=" + player)
    letters = ['R', 'S', 'P']
    computer = letters[Math.floor(Math.random() * 3)]
    console.log("computer chose: " + computer)
    alert("computer chose: " + computer)
    
    if (player == computer) {
        alert("nobody won this round")
        console.log("nobody won this round")
    }

    if (player == "R" && computer == "P") {
        alert("computer won this round")
        computerScore++
        console.log("computer won this round")
        rInput++
        pcInput++
    }else if (player == "R" && computer == "S") {
        alert("you won this round")
        playerScore++
        console.log("you won this round")
        rInput++
        scInput++
    }else if (player == "P" && computer == "R") {
        alert("you won this round")
        playerScore++
        console.log("you won this round")
        pInput++
        rcInput++
    }else if (player == "P" && computer == "S") {
        alert("computer won this round")
        computerScore++
        console.log("computer won this round")
        pInput++
        scInput++
    }else if (player == "S" && computer == "R") {
        alert("computer won this round")
        computerScore++
        console.log("computer won this round")
        sInput++
        rcInput++
    }else if (player == "S" && computer == "P") {
        alert("you won this round")
        playerScore++
        console.log("you won this round")
        sInput++
        pcInput++
    }
    
    if (player == "S" && computer == "S") {
        sInput++
        scInput++
    }
    if (player == "R" && computer == "R") {
        rInput++
        rcInput++
    }
    if (player == "P" && computer == "P") {
        pInput++
        pcInput++
    }
    
    rInputElement.textContent = rInput
    pInputElement.textContent = pInput
    sInputElement.textContent = sInput

    rcInputElement.textContent = rcInput
    pcInputElement.textContent = pcInput
    scInputElement.textContent = scInput
    
    computerScoreElement.textContent = computerScore
    playerScoreElement.textContent = playerScore
    
    pChose = player
    cChose = computer

    pChoseElement.textContent = pChose
    cChoseElement.textContent = cChose

    alert("ROUND ended, if you want play next round press START button")
    
    if (playerScore == 5) {
        alert("YOU WON THIS MATCH")
        playerScore = 0
        computerScore = 0
        playerWon++
    }
    if (computerScore == 5) {
        alert("COMPUTER WON THIS MATCH")
        playerScore = 0
        computerScore = 0
        computerWon++
    }
    
    computerWonElement.textContent = computerWon
    playerWonElement.textContent = playerWon
    
}

