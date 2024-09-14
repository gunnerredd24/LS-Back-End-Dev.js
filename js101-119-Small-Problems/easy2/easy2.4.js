function multiply(int1, int2) {
  return int1 * int2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);