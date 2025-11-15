console.log("Let's play rock and scissor. Click the button to play.");
// Rock paper scissors game.

// this function returns the chioce of the computer.
function getComputerChoice(){

    let compNum = Math.floor((Math.random() * 3) - 1);
    let compChoice = "";
    if (compNum == -1){
        compChoice = "rock";
    }
    else if (compNum == 0){
        compChoice = "paper";
    }
    else {
        compChoice = "scissor";
    }

    return compChoice;
}

// this function returns the choice of the human.
function getHumanChoice(){
    let humanChoice = prompt("enter a value (rock, paper or scissor)");
    return humanChoice.toLowerCase();
}

function playGame(){
    console.log("---------------Game Starting---------------");
    // initial scores of human and computer.
    let humanScore = 0;
    let compScore = 0;

    // function for playing rounds.
    function playRound(compChoice, humanChoice){
        if (compChoice == humanChoice){
            console.log("It's a draw.");
        }
        else if ((compChoice == "rock" && humanChoice == "paper") ||  
        (compChoice == "paper" && humanChoice == "scissor") || 
        (compChoice == "scissor" && humanChoice == "rock"))
        {
            console.log("You Win, Computer Loses.");
            humanScore++;
        }
        else{
            console.log("You Lose, Computer Wins.");
            compScore++;
        }
    }

    for(i = 0; i < 5; i++)
    {
        let compChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(compChoice, humanChoice)
        console.log("Computer Choice: ", compChoice, "\nHuman Choice: ", humanChoice, "\nComputer Score:", compScore, "\nYour Score:", humanScore);
    }
}