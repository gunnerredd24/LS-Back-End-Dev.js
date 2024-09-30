const READLINE = require('readline-sync');

const consoleMessages = require('./mortgage_calculator_msgs.json');

function msgDisplay(msg) {
  console.log(`=> ${msg}\n`);
}

function invalidNumber(number) {
  return number.trim === '' || Number.isNaN(Number(number));
}

msgDisplay(consoleMessages.welcome);

msgDisplay(consoleMessages.loanAmount);

let loanTotal = READLINE.question();

while (invalidNumber(loanTotal)) {
  msgDisplay(consoleMessages.validInput);
  loanTotal = READLINE.question();
}

msgDisplay(consoleMessages.APR);
let annualPercentageRate = READLINE.question();

while (Number(annualPercentageRate) < 1) annualPercentageRate *= 10; // To convert any decimal inputs to integers.

while (invalidNumber(annualPercentageRate)) {
  msgDisplay(consoleMessages.APRCheck)
  annualPercentageRate = READLINE.question();
}

msgDisplay(consoleMessages.loanDuration);

let loanDuration = READLINE.question();

while (invalidNumber(loanDuration)) {
  msgDisplay(consoleMessages.loanDurationCheck)
  loanDuration = READLINE.question();
}

let monthlyInterestRate = annualPercentageRate / 12;

console.log(typeof(annualPercentageRate));