
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let result = document.querySelector(".display-result");
let finalResult = document.querySelector(".final-result")

let humanScore = 0;
let computerScore = 0;

let roundsPlayed = 0;

rock.addEventListener("click", () => {
   const playerChoice = "rock";
   
   const getComputerChoice = () => {
    const choice =Math.floor(Math.random() * (3 - 1 + 1)) + 1 ;

    if(choice === 1){
       return "rock";
    }

    else if(choice === 2){
        return "paper";
    }

    else if(choice === 3){
        return "scissors";
    }   
   }

   const computerSelection = getComputerChoice();

     if(playerChoice == computerSelection){
         result.textContent= `computer selected ${computerSelection}, its a draw`;

     }

     else if( playerChoice === "rock" && computerSelection == "paper"){
        result.textContent = `computer selected ${computerSelection}, you lose, paper beats rock`;
        computerScore++;
     }

     else if(playerChoice === "rock" && computerSelection == "scissors"){
        result.textContent = `computer selected ${computerSelection}, you win, rock beats scissors`;
        humanScore++;
     } 

      scoreCheck()
})

paper.addEventListener("click", () => {
   const playerChoice = "paper"

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

   const computerSelection = getComputerChoice();

     if(playerChoice == computerSelection){
         result.textContent= `computer Selected ${computerSelection}, its a draw`;
     }

     else if( playerChoice === "paper" && computerSelection == "rock"){
        result.textContent = `computer selected ${computerSelection}, you win, paper beats rock`;
        humanScore++;
     }

     else if(playerChoice === "paper" && computerSelection == "scissors"){
        result.textContent = `computer Selected ${computerSelection}, you lose, scissors beats paper`;
        computerScore++;
     } 

      scoreCheck()
})


scissors.addEventListener("click", () => {
   const playerChoice = "scissors";


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

   const computerSelection = getComputerChoice();

     if(playerChoice == computerSelection){
         result.textContent= `computer selected ${computerSelection}, its a draw`
     }

     else if( playerChoice === "scissors" && computerSelection == "paper"){
        result.textContent = `computer Selected ${computerSelection}, you win, scissors beats paper`
        humanScore++;
     }

     else if(playerChoice === "scissors" && computerSelection == "rock"){
        result.textContent = `computer Selected ${computerSelection}, you lose, rock beats scissors`
        computerScore++;
     } 

     scoreCheck()

})




const scoreCheck = () => {
   roundsPlayed++;

   if(roundsPlayed === 5){
      if(humanScore > computerScore){
         finalResult.textContent = `you win the game eje`;
         result.textContent = ``
      }
      else if(humanScore < computerScore){
         finalResult.textContent = `oga!! you don lose for the game`;
         result.textContent = ``
      }
      else{
         finalResult.textContent = `una don draw the game`;
         result.textContent = ``
      }
   }
}

/*const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

     
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

playGame()*/


