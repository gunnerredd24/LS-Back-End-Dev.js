function penultimate(string) {
  let stringArray = string.split(' ');
  if(stringArray.length % 2 === 1) {
    return stringArray[(stringArray.length - 1) / 2];
  } else if (stringArray.length % 2 === 0) {
    return stringArray[stringArray.length / 2]
  };
}

console.log(penultimate(''));
console.log(penultimate('Launch School be is great!'));