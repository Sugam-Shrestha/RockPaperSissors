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
    let humanNum = window.prompt("enter a value (-1 : rock, 0 : paper or 1 : scissor)");
    let humanChoice = "";
    if (humanNum == -1){
        humanChoice = "Rock";
    }
    else if (humanNum == 0){
        humanChoice = "Paper";
    }
    else {
        humanChoice = "Scissor";
    }

    return humanChoice;
}

console.log("Computer Choice: ", getComputerChoice());
console.log("Human Choice: ", getHumanChoice());