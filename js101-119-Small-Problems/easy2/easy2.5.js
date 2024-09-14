let rLSync = require('readline-sync');

let num1 = Number(rLSync.question('Enter the first number: \n'));

let num2 = Number(rLSync.question('Enter the second number \n'));

function arithmeticOperations(int1, int2) {
  console.log(`${int1} + ${int2} = ${int1 + int2}`);
  console.log(`${int1} - ${int2} = ${int1 - int2}`);
  console.log(`${int1} * ${int2} = ${int1 * int2}`);
  console.log(`${int1} / ${int2} = ${Math.floor(int1 / int2)}`);
  console.log(`${int1} % ${int2} = ${int1 % int2}`);
  console.log(`${int1} ** ${int2} = ${Math.pow(int1, int2)}`);
}

arithmeticOperations(num1, num2);