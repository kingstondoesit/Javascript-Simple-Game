//Second Interactive Game

let playgame = confirm ("Shall we play a random number guess game?");
if (playgame) {
    //Game arguments go in here
    function playerSelection (){
        
        while (true) {
            let playerChoice = prompt ("Here we go! Pick a number between 1 and 3");
        
            if (playerChoice){
                //Proceed with game argument here
        
                let playerOne = parseInt(playerChoice);
        
                if (playerOne > 0 && playerOne <= 3){
                    //Proceed to generate computer response

                    let computerChoice = Math.floor(Math.random() * 3 + 1); //Generate random value between 1 and 3
                    // let computerChoice = Math.ceil(Math.random() * 3 );
                    
                    let result =
                    playerOne === computerChoice ? `PlayerOne:" ${playerOne}\nComputer: ${computerChoice}\n\n"Tie Game!"`: 
                    `playerOne: ${playerOne}\nComputer: ${computerChoice}\n\nComputer Wins!`

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
                    alert ("You did not enter a valid number. Select a number between 1 and 3!");
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