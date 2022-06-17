
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
    if (playerS == "Rock") {
        switch(computerS) {
            case "Rock":
                return "Tie! You both chose rock";
                break;
            case "Paper":
                return "You lose! Paper beats rock";
                break;
            case "Scissors":
                return "You win! Scissors beats paper";
                break;
        }
     } else if (playerS == "Paper") {
        switch(computerS) {
            case "Rock":
                return "You win! Paper beats rock";
                break;
            case "Paper":
                return "Tie! You both chose paper";
                break;
            case "Scissors":
                return "You lose! Scissors beat paper";
                break;
        } 
    } else if (playerS == "Scissors") {
        switch(computerS) {
            case "Rock":
                return "You lose! Rock beats scissors";
                break;
            case "Paper":
                return "You win! Scissors beat paper";
                break;
            case "Scissors":
                return "Tie! You both chose scissors";
                break;
        }
    }
    return "Invalid input";
}
    

