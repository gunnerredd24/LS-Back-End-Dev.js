function centerOf(string) {
  if (string.trim() === '') return;
  let stringLength = string.length;

  if (oddOrEven(stringLength) === "odd") {
    return string.charAt(stringLength / 2);
  } else if (oddOrEven(stringLength) === "even") {
    return string.slice((stringLength / 2) - 1, (stringLength / 2) + 1);
  }
}

function oddOrEven(length) {
  if(length % 2 === 1) return "odd";
  else return "even";
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
console.log(centerOf("   "));