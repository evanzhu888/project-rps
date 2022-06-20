//Declare computer score, player score, and the total number of rounds played
let cScore = 0;
let pScore = 0;
let total = 0;
//Randomly returns either rock, paper, or scissors
function computerPlay() {
    let a = Math.floor(Math.random() * 3);
    switch(a) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors"
            break;
    }
}

function playRound(playerS, computerS) {
    if (playerS.toLowerCase() == "rock") {
        switch(computerS.toLowerCase()) {
            case "rock":
                return "Tie! You both chose rock";
                break;
            case "paper":
                cScore++;
                return "You lose! Paper beats rock";
                break;
            case "scissors":
                pScore++;
                return "You win! Rock beats scissors";
                break;
        }
     } else if (playerS.toLowerCase() == "paper") {
        switch(computerS.toLowerCase()) {
            case "rock":
                pScore++;
                return "You win! Paper beats rock";
                break;
            case "paper":
                return "Tie! You both chose paper";
                break;
            case "scissors":
                cScore++;
                return "You lose! Scissors beat paper";
                break;
        } 
    } else if (playerS.toLowerCase() == "scissors") {
        switch(computerS.toLowerCase()) {
            case "rock":
                cScore++;
                return "You lose! Rock beats scissors";
                break;
            case "paper":
                pScore++;
                return "You win! Scissors beat paper";
                break;
            case "scissors":
                return "Tie! You both chose scissors";
                break;
        }
    }
    return "Invalid input";
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    total++;
    const child = document.querySelector("#child");
    child.textContent = playRound("Rock", computerPlay()) + "\n" + score();
    if (total == 5) {
        checkWinner();
    }
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    total++;
    const child = document.querySelector("#child");
    child.textContent = playRound("Paper", computerPlay()) + score();
    if (total == 5) {
        checkWinner();
    }
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    total++;
    const child = document.querySelector("#child");
    child.textContent = playRound("Scissors", computerPlay()) + score();
    if (total == 5) {
        checkWinner();
    }
});

function score() {
    return " || Your score: " + pScore + ", Computer Score: " + cScore;
}

function checkWinner() {
    if (cScore > pScore) {
        alert("You lose! The computer beat you " + cScore + " to " + pScore);
    } else if (pScore > cScore) {
        alert("You win! You beat the computer " + pScore + " to " + cScore);
    } else {
        alert("Tie!" + " The final score is " + pScore + " to " + cScore);
    }
    const child = document.querySelector("#child");
    child.textContent = "Your Score: 0, Computer Score: 0";
    cScore = 0;
    pScore = 0;
    total = 0;

}
