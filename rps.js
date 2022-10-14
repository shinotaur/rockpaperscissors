let compWin = 0;
let playerWin = 0;

function round(){
  let userChoice = prompt("Do you choose rock, paper or scissors?");
  let computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
    }

var play = function(choice1, choice2) {
    if(choice1 === choice2) {
    alert("The result is a tie!");
  }
  if(choice1 === "rock") {
    if(choice2 === "scissors") {
        alert("rock wins");
        playerWin++;
    } else {
        alert("paper wins");
        compWin++
    }
  }
  if(choice1 === "paper") {
    if(choice2 === "rock") {
        alert("paper wins");
        playerWin++
    } else {
        if(choice2 === "scissors") {
            alert("scissors wins");
            compWin++
    }
  }
  if(choice1 === "scissors") {
    if(choice2 === "rock") {
        alert("rock wins");
        compWin++;
    } else {
        if(choice2 === "paper") {
            alert("scissors wins");
          playerWin++
            
        }
      }
    }
  }

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
  }
 
  play(userChoice, computerChoice);

}


function game(){
  for(let i = 1 ; i <= 5 ; i++){
    round();
  }
  if(playerWin > compWin){
    alert("You Win!")
  }else if (playerWin < compWin){
    alert("You Lose...")
  }else{
    alert("It's a TIE.")
  }
}
