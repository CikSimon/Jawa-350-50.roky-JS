
// counter

// main block
let ranking = ""
let playerscore = 0
let computerscore = 0

let playerwon = 0
let computerwon = 0 

function resetscore() {
    playerscore = 0
    computerscore = 0
    playerwon = 0
    computerwon = 0

    alert("RESET DONE, YOU WILL SEE THE RESULT IN NEXT ROUND")
}

function mainfunction() {

    let computerwonE = document.getElementById("computer-won")
    let playerwonE = document.getElementById("player-won")

    let computerscoreE = document.getElementById("computer-score")
    let playerscoreE = document.getElementById("player-score")

    let rankingE = document.getElementById("rRanking")

    let acceptrules = confirm("Do you know the rules?")

    if (acceptrules) {
        alert("Let's start the game!");
    }else{
        alert("Here are the rules: CHOOSE R,P or SROCK = R,PAPER = P,SCISSORS = S,If you want reset the game, press RESET button,Whoever gets a score of 5 first wins,I hope you will understand the rest of the rules")
        alert("Let's start the game!");
    }


    let player = prompt("choose R, P, or S:");
    while (player !== "R" && player !== "P" && player !== "S") {
        if (player === null) { // užívateľ klikol na tlačidlo "Cancel"
            alert("You have canceled the input. The game will now exit.");
            break; // ukončiť kód
        }
        alert("You entered an invalid value. Please choose R, P, or S.");
        player = prompt("Choose R, P, or S:");
    }
    console.log("player=" + player)
    let letters = ['R', 'S', 'P']
    let computer = letters[Math.floor(Math.random() * 3)]
    console.log("pc=" + computer)
    alert("pc=" + computer)
    
    if (player == computer) {
        alert("nobody won this round")
        console.log("nobody won this round")
    }

    if (player == "R" && computer == "P") {
        alert("computer won this round")
        computerscore++
        ranking += "Computer WON "
        console.log("computer won this round")
    }else if (player == "R" && computer == "S") {
        alert("you won this round")
        playerscore++
        ranking += "Player WON "
        console.log("you won this round")
    
    }else if (player == "P" && computer == "R") {
        alert("you won this round")
        playerscore++
        ranking += "Player WON "
        console.log("you won this round")
    }else if (player == "P" && computer == "S") {
        alert("computer won this round")
        computerscore++
        ranking += "Computer WON "
        console.log("computer won this round")
    
    }else if (player == "S" && computer == "R") {
        alert("computer won this round")
        computerscore++
        ranking += "Computer WON "
        console.log("computer won this round")
    }else if (player == "S" && computer == "P") {
        alert("you won this round")
        playerscore++
        ranking += "Player WON "
        console.log("you won this round")
    }
    
    computerscoreE.textContent = computerscore
    playerscoreE.textContent = playerscore

    rankingE.textContent = ranking

    alert("game ended, if you want play next round press START button")
    
    if (playerscore == 5) {
        alert("YOU WON THIS MATCH")
        playerwon++
    }
    if (computerscore == 5) {
        alert("COMPUTER WON THIS MATCH")
        computerwon++
    }
    
    computerwonE.textContent = computerwon
    playerwonE.textContent = playerwon
    
}

