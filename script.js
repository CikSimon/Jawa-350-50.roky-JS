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

function mainfunction() {
    let playerscore = 0
    let computerscore = 0

    let spanElement1 = document.getElementById("computer-score")
    let spanElement2 = document.getElementById("player-score")
    
    alert("this is the best game in the world")
    console.log("alert")
    let player = prompt("choose R, P, or S:", "")
    console.log("player=" + player)
    let letters = ['R', 'S', 'P']
    let computer = letters[Math.floor(Math.random() * 3)]
    console.log("pc=" + computer)
    alert("pc=" + computer)
    
    if (player == computer) {
        alert("nobody won")
        console.log("nobody won")
    }

    if (player == "R" && computer == "P") {
        alert("computer won")
        computerscore++
        console.log("computer won")
    }else if (player == "R" && computer == "S") {
        alert("you won")
        playerscore++
        console.log("you won")
    
    }else if (player == "P" && computer == "R") {
        alert("you won")
        playerscore++
        console.log("you won")
    }else if (player == "P" && computer == "S") {
        alert("computer won")
        computerscore++
        console.log("computer won")
    
    }else if (player == "S" && computer == "R") {
        alert("computer won")
        computerscore++
        console.log("computer won")
    }else if (player == "S" && computer == "P") {
        alert("you won")
        playerscore++
        console.log("you won")
    }
    
    spanElement1.textContent = computerscore
    spanElement2.textContent = playerscore
    
    alert("game ended, if you want play again press START button")
}
