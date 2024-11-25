//Q1: 

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return 
  {
    prop1: "hi there";
  }
}

console.log(first()); // returns expected output.
console.log(second()); // returns undefined because javascript likes to insert semicolons where it thinks it needs to go. In this case it inserted it after return ;. Making it return undefined.

//Q2:
// It will log {first : [1, 2]}

//Q3:

// //A -
// function messWithVars(one, two, three) { // These parameters shadow the outside variable named one two and three causing it to have no effect on the outer variables.
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);      // "one is: [one]"
// console.log(`two is: ${two}`);      // "two is: [two]"
// console.log(`three is: ${three}`);  // "three is: [three]"

// // B -
// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);    //"one is: [one]";
// console.log(`two is: ${two}`);    //"two is: [two]";
// console.log(`three is: ${three}`);//"three is: [three]";

// // C - 
// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);    //"one is: [two]";
// console.log(`two is: ${two}`);    //"two is: [three]";
// console.log(`three is: ${three}`);//"three is: [one]";

//Q4:
function boo(scare) { // boo = var, scare = var
  let myBoo = scare.toUpperCase() + "!!!"; // myBoo = var, scare = var, '!!!' = primitve value. creates another string and uses another string. 3 total PVs.
  console.log(myBoo);
}

const halloweenCollection = { // = object literal, = var
  greet: "Happy Halloween", // "HH" = PV, greet = PV
  scare: "Boo",             // "boo" = PV. scare = PV
  wish: "May all your pumpkins be glowing", // string = PV, wish = PV
};

let myBoo = boo(halloweenCollection["greet"]); // myBoo = var, "greet" = PV. boo = function object. undefined = PV.

//Q5:
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length > 4 || dotSeparatedWords.length < 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("10.4.11.102"));
console.log(isDotSeparatedIpAddress("10.4.4"));
console.log(isDotSeparatedIpAddress("10.4.4.4.4.4"));