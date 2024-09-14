let rLSync = require("readline-sync"); // Define rLSync to get user input for later.

console.log("Please enter a number greater than 0: "); // Log this to the console and then prompt to receieve an input from the user to be stored in the variable inputNumber.
let inputNumber = rLSync.prompt();
inputNumber = parseInt(inputNumber, 10); // Convert the string we just got to a number.

if(inputNumber > 0) { // check to make sure that we got an input greater than 0.
   console.log("Enter 's' to compute the sum or 'p' to compute the product.(no caps when entering please) "); // log to the console to ask for another input from the user to represent the variable inputSumOrProd.
} else return; // if input was not greater than 0 we would stop the program.
let inputSumOrProd = rLSync.prompt(); // value used to determine if the program will calculate the sum or the product.

if(inputSumOrProd === "s") sumCalculator(inputNumber); // a check to make sure we use the correct calculator.
else if(inputSumOrProd === "p") prodCalculator(inputNumber);
  
function sumCalculator(number) { //
let currentNumber = number - 1;
let total = number;
do { total += currentNumber;
  currentNumber = currentNumber - 1;
} while(currentNumber >= 1);

console.log(`The sum of the integers between 1 and ${inputNumber} is ${total}`);
}

function prodCalculator(number) {
  let currentNumber = number - 1;
  let total = number;
  do { total *= currentNumber;
    currentNumber = currentNumber - 1;
  } while(currentNumber >= 1);
  
  console.log(`The product of the integers between 1 and ${inputNumber} is ${total}`);
  }

  return;