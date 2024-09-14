rLSync = require('readline-sync');

let name = rLSync.question('What is your name? ');

console.log(name.includes('!') ? `HELLO ${name.slice(0 , name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?` : `Hello ${name}.`)