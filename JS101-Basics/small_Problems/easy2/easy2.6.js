function penultimate(string) {
  let stringArray = string.split(' ');
  return stringArray[stringArray.length - 2];
}

console.log(penultimate('last word') === 'last');
console.log(penultimate('Launch School is great!') === 'is');