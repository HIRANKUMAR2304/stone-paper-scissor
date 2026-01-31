    let userScore = 0;
    let computerScore = 0;
    let equal = 0;

    if (result === 'you win 👍') {
        userScore++;
    } else if (result === 'you loss 👎') {
        computerScore++;
    } else if(result === 'tie 🤝'){
        equal++;
    }


    function playGame(userChoice) {
        let random = Math.random();
        let computerChoice = '';

        if (random >= 0 && random < 1/3) {
            computerChoice = 'rock';
        } else if (random >= 1/3 && random < 2/3) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }

        let result = '';

        if (userChoice === 'rock') {
            if (computerChoice === 'rock') {
                result = 'tie 🤝';
                equal++;
            } else if (computerChoice === 'paper') {
                result = 'you loss 👎';
                computerScore++;
            } else {
                result = 'you win 👍';
                userScore++;
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                result = 'you win 👍';
                userScore++;
            } else if (computerChoice === 'paper') {
                result = 'tie 🤝';
                equal++;
            } else {
                result = 'you loss 👎';
                computerScore++;
            }
        } else { // scissors
            if (computerChoice === 'rock') {
                result = 'you loss 👎';
                computerScore++;
            } else if (computerChoice === 'paper') {
                result = 'you win 👍';
                userScore++;
            } else {
                result = 'tie 🤝';
                equal++;
            }
        }

        alert(`Computer chose ${computerChoice} and you ${result}`);
    }
function updateScore() {
        let score = `User Score: ${userScore} | Computer Score: ${computerScore} | ties:${equal}`;
        document.getElementById('scoreDisplay').innerText = score;
    }