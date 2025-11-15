console.log("Hello World");
// Rock paper scissors game.

// this function returns the chioce of the computer.
function getComputerChoice(){

    let compNum = Math.floor((Math.random() * 3) - 1);
    let compChoice = "";
    if (compNum == -1){
        compChoice = "Rock";
    }
    else if (compNum == 0){
        compChoice = "Paper";
    }
    else {
        compChoice = "Scissor";
    }

    return compChoice;
}

// this function returns the choice of the human.
function getHumanChoice(){
    let humanChoice = window.prompt("enter a value (rock, paper or scissor)");

    return humanChoice;
}

console.log("Computer Choice: ", getComputerChoice());
console.log("Human Choice: ", getHumanChoice());