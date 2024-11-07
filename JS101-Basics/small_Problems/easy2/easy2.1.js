function greetings(arr, obj) {
  return `Hello, ${arr.join(' ')}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(greetings(["John", 'Q' , "Doe"] , { title: "Master" , occupation: "Plumber"}));
console.log(greetings(['Gunner' , 'D' , 'Redd'] , {title: "Pro" , occupation: "Ramp Service Employee"}));