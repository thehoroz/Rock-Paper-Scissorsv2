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

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        alert("Computer chose Paper, you lose!")
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        alert("Computer chose Scissors, you win!")
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        alert("Computer chose Rock, you win!")
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        alert("Computer chose Scissors, you lose!")
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        alert("Computer chose Paper, you win!")
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        alert("Computer chose Rock, you lose!")
    } else {
        alert("Computer chose " + computerSelection + ", it's a draw!")
    }
};

const rockbtn = document.querySelector('#rockcontainer');
rockbtn.addEventListener('click', () => {
  playRound('', 'Rock');
});

const paperbtn = document.querySelector('#papercontainer');
paperbtn.addEventListener('click', () => {
  playerSelection = 'Paper';
  playRound('', 'Paper');
});

const scissorbtn = document.querySelector('#scissorcontainer');
scissorbtn.addEventListener('click', () => {
  playerSelection = 'Scissors';
  playRound('', 'Scissors');
});