#! /usr/bin/env node
import inquirer from "inquirer";
const guess = await inquirer.prompt([{
        name: "player1",
        type: "list",
        message: "player1 make your choice",
        choices: ["Rock", "Paper", "Scissor"]
    }]);
const gues = await inquirer.prompt([{
        name: "player2",
        type: "list",
        message: "player2 make your choice",
        choices: ["Rock", "Paper", "Scissor"]
    }]);
if (guess.player1 === gues.player2) {
    console.log("it's a tie! ");
}
else if ((guess.player1 === "Rock" && gues.player2 === "Scissor") ||
    (guess.player1 === "Scissor" && gues.player2 === "Paper") ||
    (guess.player1 === "Paper" && gues.player2 === "Rock")) {
    console.log("player1 wins!");
}
else {
    console.log("player2 wins!");
}
