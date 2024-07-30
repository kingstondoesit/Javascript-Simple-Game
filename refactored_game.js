// Rock, Paper, Scissors: Refactored with Functions and DOM(Document Object Model) in mind

// Initialize the game by asking the user if they want to play
const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    // If the user confirms, start the game; otherwise, show a message
    startGame ? playGame() : alert("Ok, maybe next time.");
};

// Game flow function
const playGame = () => {
    while (true) {
        // Get the player's choice
        let playerChoice = getPlayerChoice();
        // Format the player's choice (trim and convert to lowercase)
        playerChoice = formatPlayerChoice(playerChoice);

        // If the playerChoice is an empty string, notify and continue the loop
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }

        // If the player cancels the prompt, exit the loop
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }

        // Evaluate the player's choice to ensure it's valid
        playerChoice = evaluatePlayerChoice(playerChoice);

        // If the player's choice is invalid, notify and continue the loop
        if (!playerChoice) {
            invalidChoice();
            continue;
        }

        // Get the computer's choice
        const computerChoice = getComputerChoice();
        // Determine the winner based on the player's and computer's choices
        const result = determineWinner(playerChoice, computerChoice);

        // Display the result of the game
        displayResult(result);

        // Ask if the player wants to play again; if not, thank them and exit the loop
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

// Notify the player of an invalid choice
const invalidChoice = () => {
    return alert("You did not enter rock, paper, or scissors");
};

// Notify the player if they decided not to play
const decidedNotToPlay = () => {
    return alert("I guess you changed your mind. See you next time!");
};

// Prompt the player to enter their choice
const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
};

// Format the player's choice by trimming and converting to lowercase
const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

// Evaluate the player's choice to ensure it is "rock," "paper," or "scissors"
const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        return false;
    }
};

// Generate the computer's choice randomly
const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3); //generates random number between 0 and 2 to match with the array item index 0-2
    const rsArray = ["rock", "paper", "scissors"];
    return rsArray[random];
};

// Determine the winner based on the player's and computer's choices
const determineWinner = (playerOne, computer) => {
    let result =
        playerOne === computer ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nTie Game!` :
        playerOne === "rock" && computer === "paper" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!` :
        playerOne === "rock" && computer === "scissors" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nPlayerOne Wins!` :
        playerOne === "paper" && computer === "rock" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nPlayerOne Wins!` :
        playerOne === "paper" && computer === "scissors" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!` :
        playerOne === "scissors" && computer === "rock" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!` :
        `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nPlayerOne Wins!`;
    return result;
};

// Display the result of the game
const displayResult = (result) => {
    return alert(result);
};

// Ask the player if they want to play again
const askToPlayAgain = () => {
    return confirm("Play Again?");
};

// Thank the player for playing
const thanksForPlaying = () => {
    return alert("Thanks for playing. Goodbye!");
};

// Start the game
initGame();