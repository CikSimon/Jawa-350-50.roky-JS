// main block
let playerscore = 0
let computerscore = 0
let pchose = ""
let cchose = ""

let rinput = 0
let pinput = 0
let sinput = 0

let rcinput = 0
let pcinput = 0
let scinput = 0


let playerwon = 0
let computerwon = 0 

let rulesAccepted = false;

function resetscore() {
    playerscore = 0
    computerscore = 0
    playerwon = 0
    computerwon = 0

    alert("RESET DONE, YOU WILL SEE THE RESULT IN NEXT ROUND")
}

function startGame() {
    pchose = ""
    cchose = ""

    let computerwonElement = document.getElementById("computer-won")
    let playerwonElement = document.getElementById("player-won")

    let computerscoreElement = document.getElementById("computer-score")
    let playerscoreElement = document.getElementById("player-score")

    let pchoseElement = document.getElementById("p-chose")
    let cchoseElement = document.getElementById("c-chose")

    let rinputElement = document.getElementById("r-input")
    let pinputElement = document.getElementById("p-input")
    let sinputElement = document.getElementById("s-input")

    let rcinputElement = document.getElementById("rc-input")
    let pcinputElement = document.getElementById("pc-input")
    let scinputElement = document.getElementById("sc-input")

    if (!rulesAccepted) {
        let acceptrules = confirm("Do you know the rules?");
        if (acceptrules) {
            alert("Let's start the game!");
            rulesAccepted = true;
        } else {
            alert("Here are the rules: CHOOSE R,P or SROCK = R,PAPER = P,SCISSORS = S,If you want reset the game, press RESET button,Whoever gets a score of 5 first wins,I hope you will understand the rest of the rules");
            alert("Let's start the game!");
        }
    }


    let player = prompt("choose R, P, or S:");
    while (player !== "R" && player !== "P" && player !== "S") {
        if (player === null) { // cancel button
            alert("You have canceled the input. The game will now exit.");
            break; // stop code
        }
        alert("You entered an invalid value. Please choose R, P, or S.");
        player = prompt("Choose R, P, or S:");
    }
    console.log("player=" + player)
    let letters = ['R', 'S', 'P']
    let computer = letters[Math.floor(Math.random() * 3)]
    console.log("computer chose: " + computer)
    alert("computer chose: " + computer)
    
    if (player == computer) {
        alert("nobody won this round")
        console.log("nobody won this round")
    }

    if (player == "R" && computer == "P") {
        alert("computer won this round")
        computerscore++
        console.log("computer won this round")
        rinput++
        pcinput++
    }else if (player == "R" && computer == "S") {
        alert("you won this round")
        playerscore++
        console.log("you won this round")
        rinput++
        scinput++
    }else if (player == "P" && computer == "R") {
        alert("you won this round")
        playerscore++
        console.log("you won this round")
        pinput++
        rcinput++
    }else if (player == "P" && computer == "S") {
        alert("computer won this round")
        computerscore++
        console.log("computer won this round")
        pinput++
        scinput++
    }else if (player == "S" && computer == "R") {
        alert("computer won this round")
        computerscore++
        console.log("computer won this round")
        sinput++
        rcinput++
    }else if (player == "S" && computer == "P") {
        alert("you won this round")
        playerscore++
        console.log("you won this round")
        sinput++
        pcinput++
    }
    
    rinputElement.textContent = rinput
    pinputElement.textContent = pinput
    sinputElement.textContent = sinput

    rcinputElement.textContent = rcinput
    pcinputElement.textContent = pcinput
    scinputElement.textContent = scinput
    
    computerscoreElement.textContent = computerscore
    playerscoreElement.textContent = playerscore
    
    pchose = player
    cchose = computer

    pchoseElement.textContent = pchose
    cchoseElement.textContent = cchose

    alert("ROUND ended, if you want play next round press START button")
    
    if (playerscore == 5) {
        alert("YOU WON THIS MATCH")
        playerscore = 0
        computerscore = 0
        playerwon++
    }
    if (computerscore == 5) {
        alert("COMPUTER WON THIS MATCH")
        playerscore = 0
        computerscore = 0
        computerwon++
    }
    
    computerwonElement.textContent = computerwon
    playerwonElement.textContent = playerwon
    
}

