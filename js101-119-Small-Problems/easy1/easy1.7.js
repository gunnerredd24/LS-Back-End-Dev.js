function shortLongShort(stringOne, stringTwo) {
  if(stringOne.length > stringTwo.length) {
    longString = stringOne;
    shortString = stringTwo;
  } else if(stringTwo.length > stringOne.length) {
    longString = stringTwo;
    shortString = stringOne;
  }
  return shortString + longString + shortString;
}
// ** MORE EFFICIENT WAY TO WRITE THE FUNCTION
// function shortLongShort(stringOne, stringTwo) {
//   if(stringOne.length > stringTwo.length) 
//     return stringTwo + stringOne + stringTwo;
//   else return stringOne + stringTwo + stringOne;
// } 

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));