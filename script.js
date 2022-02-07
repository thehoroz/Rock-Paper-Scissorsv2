let playerScore = 0;
let computerScore = 0;
const announcement = document.querySelector(".announcement")
const playerScoreboard = document.querySelector(".playerscoreboard")
const computerScoreboard = document.querySelector(".computerscoreboard")

function computerPlay() {
    let selection = Math.floor(Math.random() *3 ) + 1;
    switch(selection) {
        case 1:
        selection = "Scissors";
        break;
        
        case 2:
        selection = "Rock";
        break;

        case 3:
        selection = "Paper";
        break;
    }
    return selection;
}
// had to make it into *= rather than just *. It works now.

function scoreSetter() {
    computerScoreboard.textContent = "Computer: " + computerScore;
    playerScoreboard.textContent = "Player: " + playerScore;
}

function resetScore(){
    if (playerScore == 5){
        alert("You win! Reset the score and play again!")
        playerScore *= 0;
        computerScore *= 0;
        scoreSetter();
        announcement.textContent = "Good job! Now win again!";

    } else if (computerScore == 5){
        alert("You lose! Reset the score and play again!")
        playerScore *= 0;
        computerScore *= 0;
        scoreSetter();
        announcement.textContent = "Too bad.. but try again!";
    }
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        announcement.textContent = "Computer chose Paper, you lose!";
        ++computerScore;
        scoreSetter();
        resetScore();

    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        announcement.textContent = "Computer chose Scissors, you win!";
        ++playerScore
        scoreSetter();
        resetScore();

    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        announcement.textContent = "Computer chose Rock, you win!";
        ++playerScore
        scoreSetter();
        resetScore();

    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        announcement.textContent = "Computer chose Scissors, you lose!";
        ++computerScore;
        scoreSetter();
        resetScore();

    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        announcement.textContent = "Computer chose Paper, you win!";
        ++playerScore
        scoreSetter();
        resetScore();

    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        announcement.textContent = "Computer chose Rock, you lose!";
        ++computerScore;
        scoreSetter();
        resetScore();

    } else {
        announcement.textContent = "Computer also chose " + computerSelection + ", it's a draw!";
    }
    console.log(playerScore);
    console.log(computerScore);
};

const rockbtn = document.querySelector('#rockcontainer');
rockbtn.addEventListener('click', () => {
  playRound(computerPlay(), 'Rock');
});

const paperbtn = document.querySelector('#papercontainer');
paperbtn.addEventListener('click', () => {
  playRound(computerPlay(), 'Paper');
});

const scissorbtn = document.querySelector('#scissorcontainer');
scissorbtn.addEventListener('click', () => {
  playRound(computerPlay(), 'Scissors');
});