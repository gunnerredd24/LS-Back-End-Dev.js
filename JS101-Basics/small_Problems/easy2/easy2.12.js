// function negative(num) {
//   if (num > 0) {
//     return num - num - num;
//   } else if (num === 0) {
//     return -0;
//   }
//   return num;
// }

// function negative(num) {
//   return Math.abs(num) * -1;
// }

function negative(num) {
  return num >= 0 ? num * -1 : num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

/* In math 0 and -0 represent the same thing with a few tweaks.
Like -Infinity and infinity when dividing by 0 or -0.
In objects 0 represents an element and -0 does not. 
In binary 0 reprsents 1 and -0 represents 0.
There are many other things that are different and complicated between 0 and -0 especially when it comes to comparisons between the two.
*/