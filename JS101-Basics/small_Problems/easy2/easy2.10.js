const READLINE = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

prompt("What is your age?");
let userAge = READLINE.question();

while (invalidNumber(userAge)) {
  prompt("Invalid input. Please enter a number.");
  userAge = READLINE.question();
};

prompt("At what age would you like to retire?");
let retirementAge = READLINE.question();

while (invalidNumber(retirementAge)) {
  prompt("Invalid input. Please enter a number.");
  retirementAge = READLINE.question();
}

let today = new Date();
let currentYear = today.getFullYear();
let workYears = retirementAge - userAge;
let retirementYear = currentYear + workYears;

prompt(`It's ${currentYear}. You will retire in ${retirementYear}.`);
prompt(`You have only ${workYears} years of work to go!`);

// Further exploration:
// If new was not used when declaring and assigning the today variable. It would not put the object it creates in the desired place of memory and not have a reference to that memory containing the object.
