// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to the Calculator!');

prompt('What is the first number?');
let number1 = READLINE.question();

while (invalidNumber(number1)) {
  prompt('Hmmm...that doesn\'t look like a valid number.');
  number1 = READLINE.question();
}

prompt('What is the second number?');
let number2 = READLINE.question();

while (invalidNumber(number2)) {
  prompt('Hmmm...that doesn\'t look like a valid number.');
  number2 = READLINE.question();
}

prompt('What is the operation you would like to perform on these numbers?\n1) add 2) subrtract 3) multiply 4) divide');
let operation = READLINE.question();

while (!['1' , '2' , '3' , '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4.');
  operation = READLINE.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${output}`);