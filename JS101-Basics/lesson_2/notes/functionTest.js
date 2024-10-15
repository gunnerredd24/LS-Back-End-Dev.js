function changeName(name) {
  name = "bob"; // does this reassignment change the variable outside the function?
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name); // => logs 'jim'
}

anotherFunction();

function capitalize(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names = ["chris", "kevin", "naveed"];
capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
console.log(names); // => ['chris', 'kevin', 'naveed']