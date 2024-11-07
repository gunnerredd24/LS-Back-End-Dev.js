const READLINE = require("readline-sync");

const consoleMessages = require("./mortgage_calculator_msgs.json");

function msgDisplay(msg) {
  console.log(`=> ${msg}\n`);
}

function invalidNumber(number) {
  return number.trim === '' ||
   Number.isNaN(Number(number)) ||
   Number(number) < 0;
}

function roundToCents(num) {
  return (Math.round(num * 100)) * 0.01;
}

msgDisplay(consoleMessages.welcome);

while (true) {
  msgDisplay("--------------------------------");

  msgDisplay(consoleMessages.loanAmount);
  let amount = READLINE.question();

  while (invalidNumber(amount)) {
    msgDisplay(consoleMessages.validInput);
    amount = READLINE.question();
  }

  msgDisplay(consoleMessages.APR);
  msgDisplay(consoleMessages.APRExample);
  let interestRate = READLINE.question();

  while (invalidNumber(interestRate)) {
    msgDisplay(consoleMessages.APRCheck);
    interestRate = READLINE.question();
  }

  msgDisplay(consoleMessages.loanDuration);
  let duration = READLINE.question();

  while (invalidNumber(duration)) {
    msgDisplay(consoleMessages.loanDurationCheck);
    duration = READLINE.question();
  }

  let months = Number(duration) * 12;
  let annualPercentageRate = interestRate * 0.01;
  let monthlyInterestRate = Number(annualPercentageRate) / 12;

  let monthlyPayment = amount *
                       (monthlyInterestRate /
                       (1 - Math.pow((1 + monthlyInterestRate), (-months))));
  monthlyPayment = roundToCents(monthlyPayment);

  msgDisplay(`You're monthly payment would be $${monthlyPayment} per month.`);

  msgDisplay("Would you like to use the calculator again?");
  let answer = READLINE.question().toLowerCase();
  
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    msgDisplay("Please enter 'y' or 'n'.")
    answer = READLINE.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}