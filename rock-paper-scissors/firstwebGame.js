//First Interactive Game

let playgame = confirm ("Shall we play rock, paper, and scissors?");
if (playgame) {
    //Game arguments go in here
    function playerSelection (){
        
        while (true) {
            let playerChoice = prompt ("Please enter rock, paper, or scissors");
        
            if (playerChoice){
                //Proceed with game argument here
        
                let playerOne = playerChoice.trim().toLowerCase();
        
                if (playerOne ==="rock" || playerOne ==="paper" || playerOne === "scissors"){
                    //Proceed to generate computer response
                    

                    let computerChoice = Math.floor(Math.random() * 3 + 1); //Generate random value between 1 and 3
                    // let computerChoice = Math.ceil(Math.random() * 3 );

                    let computer = computerChoice === 1 ?"rock" : computerChoice === 2 ? "paper" : "scissors"
                    
                    let result =
                    playerOne === computer ? `PlayerOne:" ${playerOne}\nComputer: ${computer}\n\n"Tie Game!"` :
                    playerOne === "rock" && computer === "paper" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`:
                    playerOne === "rock" && computer === "scissors" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!` :
                    playerOne === "scissors" && computer === "rock" ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!` : 
                    `playerOne: ${playerOne}\nComputer: ${computer}\n\nPlayerOne Wins!`

                    alert(result);
                
                    let playAgain = confirm ("Play Again?");
                    // if (playAgain) {
                        // location.reload(); 
                        // playerSelection (); //Instead of reloading the page, code jumps back to top part of function *playerSelection*
                   
                    // }
                    // else{
                    //     alert("Thanks for playing. Goodbye!")
                    // }

                    playAgain ? playerSelection () : alert("Thanks for playing. Goodbye!") //Ternary replacement of the above commented if/else statement
                    break;
                }
                
                else{
                    alert ("You did not enter rock, paper, scissors");
                }
                
            }
        
            else {
                alert("I guess you changed your mind. Maybe next time!")
                break;
            }
        }
    
}

playerSelection();
}
else{
    alert("Alright. Maybe next time!")
}