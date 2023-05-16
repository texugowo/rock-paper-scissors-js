let computerChoices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

function main() {

    function playRound(playerSelection, computerSelection) {

        if (computerChoices.includes(playerSelection) == true) {

            if (playerSelection === computerChoices[computerSelection]) {
                console.log("Draw!");
            }
        
            else if (playerSelection === "rock" && computerChoices[computerSelection] === "scissors") {
                console.log("Win!");
                playerScore++;
            }
        
            else if (playerSelection === "scissors" && computerChoices[computerSelection] === "paper") {
                console.log("Win!");
                playerScore++;
            }
        
            else if (playerSelection === "paper" && computerChoices[computerSelection] === "rock") {
                console.log("Win!");
                playerScore++;
            }
    
            else if (playerSelection === "rock" && computerChoices[computerSelection] === "paper") {
                console.log("Lose!");
                computerScore++;
            }
    
            else if (playerSelection === "scissors" && computerChoices[computerSelection] === "rock") {
                console.log("Lose!");
                computerScore++;
            }
    
            else if (playerSelection === "paper" && computerChoices[computerSelection] === "scissors") {
                console.log("Lose!");
                computerScore++;
            }
    
        }

        else {
            console.log("Invalid input!");
        }

    }    

    const playerSelection = (window.prompt("Rock, paper or scissors?")).toLowerCase();;

    const computerSelection = Math.floor(Math.random() * computerChoices.length);

    playRound(playerSelection, computerSelection);

}

for(let i = 1; i <= 5; i++) {
    main()
}

if (playerScore < computerScore) {
    console.log("You lost the game!");
}

else if (playerScore > computerScore) {
    console.log("You won the game!");
}

else {
    console.log("Game draw!");
}

