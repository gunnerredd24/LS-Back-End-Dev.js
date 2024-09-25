// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const READLINE = require('readline-sync');

let msgObject = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

let again = 'y';

while(again === 'y'){
prompt(msgObject.Welcome);

prompt(msgObject.FirstNumber);
let number1 = READLINE.question();

while (invalidNumber(number1)) {
  prompt(msgObject.ValidNumber);
  number1 = READLINE.question();
}

prompt(msgObject.SecondNumber);
let number2 = READLINE.question();

while (invalidNumber(number2)) {
  prompt(msgObject.ValidNumber);
  number2 = READLINE.question();
}

prompt(msgObject.Operation);
let operation = READLINE.question();

while (!['1' , '2' , '3' , '4'].includes(operation)) {
  prompt(msgObject.OperationCheck);
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

prompt(msgObject.Another)
again = READLINE.question().toLowerCase();
}

while(!['y' , 'n'].includes(again)) {
  prompt(msgObject.AnotherCheck);
  again = READLINE.question().toLowerCase()
}
