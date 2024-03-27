import inquirer from 'inquirer';
//1)computer will generate a rendom number 
//2) user input for guessing number 
//3) compare user with computer generated number  
const randomnumber = 13;
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number",
    }
]);
if (answer.userGuessNumber === randomnumber) {
    console.log("Coguratulation! you guess right number");
}
else {
    console.log("you guess worng number");
}
;
