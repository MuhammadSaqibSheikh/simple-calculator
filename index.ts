#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([{ message: "Enter first number", type: "number", name:"firstNumber" }, { message: "Enter Second number", type: "number", name: "secondNumber" }, 
{
    message: "Select one of the opreator to perform action",
    type: "list",
    name: "opreator",
    choices: ["addition", "subtraction", "multiplication", "division"]
}])

console.log(answer)


if (answer.opreator === "addition"){
    console.log( answer.firstNumber + answer.secondNumber)
} else if (answer.opreator === "subtraction"){
    console.log( answer.firstNumber - answer.secondNumber)
}
else if (answer.opreator === "multiplication"){
    console.log( answer.firstNumber * answer.secondNumber)}
else if (answer.opreator === "division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else {
    console.log("please choose valid opreator")
}