const getComputerChoice = () => {
    const choice =Math.floor(Math.random() * (3 - 1 + 1)) + 1 ;

    if(choice === 1){
       return "rock"
    }

    else if(choice === 2){
        return "paper"
    }

    else if(choice === 3){
        return "scissors"
    }
}


const getHumanChoice = () => {

   return prompt("what are you picking");
   
}


const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

     const playRound = (humanChoice, computerChoice) => {
                
         humanChoice = humanChoice.toLowerCase();

         if(humanChoice == computerChoice){
            console.log("its a draw!!")
         }

         else if(humanChoice == "rock" && computerChoice == "scissors"){
              console.log("you win, rock beats scissors");
              humanScore ++;
         }

         else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log("you win, paper beats rock")
            humanScore++
         }

         else if(humanChoice == "scissors" && computerChoice == "paper"){
            console.log("you win, scissors beats paper")
            humanScore++
         }

         else if(humanChoice == "scissors" && computerChoice == "rock"){
            console.log("you lose, rock beats Scissors")
            computerScore++;
         }

         else if(humanChoice == "rock" && computerChoice == "paper"){
            console.log("you lose, paper beats rock")
            computerScore++;
         }

         else if(humanChoice == "paper" && computerChoice == "scissors"){
            console.log("you lose, scissors beats paper")
            computerScore++;
         }
  
     }

     
     for(i =1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
     }
     
     if(humanScore > computerScore){
        console.log("you win the game eje")
     }

     else if(humanScore < computerScore){
        console.log("computer don win the game o")
     }

     else{
        console.log("una draw the game")
     }
}

playGame()


