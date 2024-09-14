function utf16Value(string) {
  let sum = 0;

  for(idx = 0 ; idx < string.length ; idx += 1) {
    sum += string.charCodeAt(idx);
  }
  return sum;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));