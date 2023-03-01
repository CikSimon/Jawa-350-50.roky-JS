    {/* <li>
       1 ROCK = R
    </li>
    <li>
       2 PAPER = P
    </li>
    <li>
       3 SCISSORS = S
    </li> */}


// counter

// main block
let playerscore = 0
let computerscore = 0

let playerwon = 0
let computerwon = 0 


function resetscore() {
    playerscore = 0
    computerscore = 0
    playerwon = 0
    computerwon= 0
    alert("RESET DONE, YOU WILL SEE THE RESULT IN NEXT ROUND")
}


function mainfunction() {
    let spanElement3 = document.getElementById("computer-won")
    let spanElement4 = document.getElementById("player-won")

    let spanElement1 = document.getElementById("computer-score")
    let spanElement2 = document.getElementById("player-score")

    console.log("alert")
    let player = prompt("choose R, P, or S:", "")
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
        console.log("computer won this round")
    }else if (player == "R" && computer == "S") {
        alert("you won this round")
        playerscore++
        console.log("you won this round")
    
    }else if (player == "P" && computer == "R") {
        alert("you won this round")
        playerscore++
        console.log("you won this round")
    }else if (player == "P" && computer == "S") {
        alert("computer won this round")
        computerscore++
        console.log("computer won this round")
    
    }else if (player == "S" && computer == "R") {
        alert("computer won this round")
        computerscore++
        console.log("computer won this round")
    }else if (player == "S" && computer == "P") {
        alert("you won this round")
        playerscore++
        console.log("you won this round")
    }
    
    spanElement1.textContent = computerscore
    spanElement2.textContent = playerscore

    alert("game ended, if you want play next round press START button")
    
    if (playerscore == 2) {
        alert("YOU WON THIS MATCH")
        playerwon++
    }
    if (computerscore == 2) {
        alert("COMPUTER WON THIS MATCH")
        computerwon++
    }
    
    spanElement3.textContent = computerwon
    spanElement4.textContent = playerwon
    
}

