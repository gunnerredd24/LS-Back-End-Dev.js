function sumOfMultiples(targetNumber) {
  let multiplesOfTargetNumber = [];
  
  for(multipleOfThree = 0 ; multipleOfThree <= targetNumber ; multipleOfThree += 3) {
    if (multiplesOfTargetNumber.indexOf(multipleOfThree) === -1) {
      multiplesOfTargetNumber.push(multipleOfThree);
    } else continue;
  }

  for(multipleOfFive = 0 ; multipleOfFive <= targetNumber ; multipleOfFive += 5) {
    if (multiplesOfTargetNumber.indexOf(multipleOfFive) === -1) {
      multiplesOfTargetNumber.push(multipleOfFive);
    } else continue;
  }
  
  let sumOfMultiplesArray = multiplesOfTargetNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sumOfMultiplesArray;
}

console.log(sumOfMultiples(3));
console.log(sumOfMultiples(5));
console.log(sumOfMultiples(10));
console.log(sumOfMultiples(1000));