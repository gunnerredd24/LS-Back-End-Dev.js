function sumOfMultiples(targetNumber, numbersForMultiples) {
  var multiples = []; // Create empty array to add our list of multiples to.
  if (numbersForMultiples.length === 0) { // Check to see if we have any values set to numbersForMultiples, if not we default to [3,5].
    numbersForMultiples = [3,5];
  }

  numbersForMultiples.forEach(function (number) {
    let currentNumber; //create currentNumber to hold the value of each multple during our looping.
    for (currentNumber = number ; currentNumber < targetNumber ; currentNumber += number) { //increment by our starting number to get each multiple.
      if (multiples.indexOf(currentNumber) === -1) { // Check to ensure each number is unique.
        multiples.push(currentNumber); // If our multiple is unique we push it to our array of multiples.
      }
    }
  });

  return multiples.reduce(function (sum,value) { // use the reduce built in method to write a function to get a sum of all the numbers listed in multiples.
    return sum + value;
  }, 0); // Starting point for our sum.

}

// Test cases:
console.log(sumOfMultiples(20, [3,5])); // 78
console.log(sumOfMultiples(20, [3]));   // 63
console.log(sumOfMultiples(20, []));    // 78
console.log(sumOfMultiples(20, [5]));   // 30
console.log(sumOfMultiples(1, []));     // 0
