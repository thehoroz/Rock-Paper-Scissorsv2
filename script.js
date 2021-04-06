function computerPlay() {
    let selection = Math.floor(Math.random() *3 ) + 1;
    switch(selection) {
        case 1:
        selection = "scissors";
        break;
        
        case 2:
        selection = "rock";
        break;

        case 3:
        selection = "paper";
        break;
    }
    return selection;
}
computerPlay();

let playerSelection;
function playerPlay() {
    playerSelection = prompt("rock, paper, scissors!", "").toLowerCase();
    switch(playerSelection) {
        case "scissors":
        break;
        
        case "paper":
        break;

        case "rock":
        break;

        default:
        alert("Please provide a correct answer!");
    }
    return playerSelection;
}

const computerSelection = computerPlay();
console.log(computerSelection);

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        alert("Computer chose Paper, you lose!")
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert("Computer chose Scissors, you win!")
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        alert("Computer chose Rock, you win!")
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        alert("Computer chose scissors, you lose!")
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert("Computer chose Paper, you win!")
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        alert("Computer chose Rock, you lose!")
    } else {
        alert("Computer chose " + playerSelection + " ,it's a draw!")
    }
};
playRound();