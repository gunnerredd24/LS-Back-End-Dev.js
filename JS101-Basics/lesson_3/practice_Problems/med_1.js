// Q1:
let string = "The Flintstones Rock!";

let iterator = 0;

while (iterator <= 9) {
  console.log(" ".repeat(iterator) + string);
  iterator ++;
}

// Q2:
let munstersDescription = "The Munsters are creepy and spooky.";
console.log(
  munstersDescription.split('')
  .map(letter => letter === letter.toUpperCase()
  ? letter.toLowerCase() : letter.toUpperCase())
  .join(''));

  //Q3:
function factors(number) {
  number = Math.abs(number);
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
// console.log(factors(-15));
// console.log(factors(4));
// *BONUS* to verify that it the divisor is a factor of the number.

//Q4:
// Yes, the RB1 function will mutate the original calling function because .push method mutates. while the .concat method does not mutate. even tho they have the same return value.

//Q5: 
// 0.9
// 0.89999

//Q6: 
// It will log false.
// You can use Number.isNaN() method to more reliably see if a value is NaN.

//Q7:
// It will log 34.

//Q8: 
// yes, it will ransack the families data. Pass by reference is what causes the families data to be changed throughout the object.

//Q9:
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// It logs "paper".

//Q10:
// "no".