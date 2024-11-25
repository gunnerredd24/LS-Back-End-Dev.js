let numbers = [1, 2, 3, 4];
// while (numbers.length > 0) {
//   numbers.pop();
// }

// numbers.splice(0, numbers.length,);

numbers.length = 0;
console.log(numbers);

// Q2: it will output 1,2,34,5;

// Q3: "hello there"

// Q4: it will log [{ first: "value1" }, { second: "value2" }, 3, 4, 5];

Q5: 

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

// console.log(isColorValid("blue"));
// console.log(isColorValid("red"));

const isColorValid = color => ["blue", "green"].includes(color);
console.log(isColorValid("blue"));
console.log(isColorValid("red"));