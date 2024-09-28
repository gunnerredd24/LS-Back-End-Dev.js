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

while (again === 'y') {
  prompt(msgObject.welcome);

  prompt(msgObject.firstNumber);
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(msgObject.validNumber);
    number1 = READLINE.question();
  }

  prompt(msgObject.secondNumber);
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(msgObject.validNumber);
    number2 = READLINE.question();
  }

  prompt(msgObject.operation);
  let operation = READLINE.question();

  while (!['1' , '2' , '3' , '4'].includes(operation)) {
    prompt(msgObject.operationCheck);
    operation = READLINE.question();
  }


  switch (operation) {
    case '1':
      prompt(`The result of ${number1} + ${number2} is ${Number(number1) + Number(number2)}`);
      break;
    case '2':
      prompt(`The result of ${number1} - ${number2} is ${Number(number1) - Number(number2)}`);
      break;
    case '3':
      prompt(`The result of ${number1} * ${number2} is ${Number(number1) * Number(number2)}`);
      break;
    case '4':
      prompt(`The result of ${number1} / ${number2} is ${Number(number1) / Number(number2)}`);
      break;
  }

  prompt(msgObject.another);
  again = READLINE.question().toLowerCase();

  console.log('\x1Bc'); // This command will clear the console when running node.js (On most terminals)
}

while (!['y' , 'n'].includes(again)) {
  prompt(msgObject.anotherCheck);
  again = READLINE.question().toLowerCase();
}
