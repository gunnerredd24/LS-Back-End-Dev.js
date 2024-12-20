// Q1:
let advice = "Few things in life are as important as house important training your pet dinosaur.";
console.log(advice.replace('important', 'urgent'));
//Q2: 
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(0).reverse());
// console.log(numbers.slice(0).sort((num1, num2) => num2 - num1));
// console.log(numbers);
// let reversedArray = [];
// numbers.forEach(num => reversedArray.unshift(num));

//Q3:
let numbers = [1, 2, 3, 4, 5];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

//Q4:
let famousWords = "seven years ago...";
console.log("Four score and".concat(' ', famousWords));
console.log(`Four score and ${famousWords}`);

//Q5: 
numbers.splice(2, 1);
console.log(numbers);

//Q6:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// console.log(flintstones.concat(["Barney", "Betty"], ["Bambam", "Pebbles"]));
// console.log(flintstones);
// console.log(flintstones = [].concat(...flintstones));
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
// let newFlintstones = flintstones.flat();
// console.log(newFlintstones);
console.log(flintstones);
//**
//Q7: 
let fllintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(fllintstones).filter(pair => pair[0] === "Barney").shift());
//**
//Q8:
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

//Q9:
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length).length;

//Q10:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split(' ').filter(element => element === 't').length);
statement2.split(' ').filter(element => element === 't').length;
