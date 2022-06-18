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
                return "You lose! Paper beats rock";
                break;
            case "scissors":
                return "You win! Scissors beats rock";
                break;
        }
     } else if (playerS.toLowerCase() == "paper") {
        switch(computerS.toLowerCase()) {
            case "rock":
                return "You win! Paper beats rock";
                break;
            case "paper":
                return "Tie! You both chose paper";
                break;
            case "scissors":
                return "You lose! Scissors beat paper";
                break;
        } 
    } else if (playerS.toLowerCase() == "scissors") {
        switch(computerS.toLowerCase()) {
            case "rock":
                return "You lose! Rock beats scissors";
                break;
            case "paper":
                return "You win! Scissors beat paper";
                break;
            case "scissors":
                return "Tie! You both chose scissors";
                break;
        }
    }
    return "Invalid input";
}

function game() {
    let cScore = 0;
    let pScore = 0;
    for (let i = 0; i < 5; i++) {
        let pS = prompt("Rock, Paper, or Scissors?");
        while (pS.toLowerCase() != "rock" && pS.toLowerCase() != "paper" && pS.toLowerCase() != "scissors") {
            pS = prompt(pS + " is not a choice. Choose Rock, Paper, or Scissors");
        }
        let cS = computerPlay();
        let round = playRound(pS, cS);
        if (round.substring(4,8) === "lose") {
            cScore++;
        } else if (round.substring(4,7) === "win") {
            pScore++;
        }
        console.log(round + ". Your score is: " + pScore + ". The computer's score is: " + cScore);
    }
    if (cScore > pScore) {
        console.log("You lose! The computer beat you " + cScore + " to " + pScore);
    } else if (pScore > cScore) {
        console.log("You win! You beat the computer " + pScore + " to " + cScore);
    } else {
        console.log("Tie!" + " The final score is " + pScore + " to " + cScore);
    }
}

game();

