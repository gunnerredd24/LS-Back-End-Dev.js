function changeName(name) {
  console.log(name);
  name = "bob"; // does this reassignment change the variable outside the function?
  return name;
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => logs 'jim'
}

let gName = 'Gilbert';

anotherFunction();
console.log(changeName(gName));