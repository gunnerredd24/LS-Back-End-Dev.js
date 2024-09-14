const rLSyc = require('readline-sync'); // Define rLSync to get user input for later.

let inputBill = rLSyc.question(`What is the bill? \n`); // For user input of the bill.
let inputTip = rLSyc.question(`What is the tip percentage?(Please input without % sign) \n`); // For user input of the bill.
inputBill = parseInt(inputBill, 10);
inputTip = parseInt(inputTip, 10);
function tipCalculator(bill, tip) { // Define function to calculate both bill total and tip.
  let tipPercentage = tip * 0.01; // Should have recognized in rules and made note for mental note and algorithm. (Use to convert tip number into a percentage that can be used in calculation.)
  let tipTotal = bill * tipPercentage; // Use bill and percentage to calculate tip in dollars.
  let total = bill + tipTotal; // use bill and tip total in dollars to calculate total in dollars.

  console.log(`The tip is ${tipTotal} 
  The total is ${total}\n`);// Log it all to the console as mentioned in rules.
};

tipCalculator(inputBill, inputTip); 
// Test Cases:
//200 and 15 = 30 and 230
//150 and 20 = 30 and 180
//300 and 10 = 30 and 330
//100 and 0  = 0 and 100
//0 and 0    = 0 and 0