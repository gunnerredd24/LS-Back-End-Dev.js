function getTeddysAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let age = getTeddysAge(20, 120);

console.log(`Teddy is ${age} years old!`);

// Would it make a difference if they used Math.round() instead of Math.floor()?
// Yes, because with the equation, there is a possiblity that it would need to round 100.9 before adding 20. which would give you 121 and that is out of the range.

// With further Exploration

// function getTeddysAge(min, max) {
//   let newMax;
//   let newMin;
//   if (min > max) {
//     newMax = min;
//     newMin = max;
//     return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;;
//   } else {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// }
// let age = getTeddysAge(120, 20);

// console.log(`Teddy is ${age} years old!`);