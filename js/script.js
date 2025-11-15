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

console.log(getComputerChoice());