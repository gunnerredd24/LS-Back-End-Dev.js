let rLSync = require('readline-sync');

function getLength() {
  return rLSync.question('Enter the length of the room in meters:');
}

function getWidth(){
  return rLSync.question('Enter the width of the room in meters:');
}

function areaInMeters(length, width) {
  return sMArea = length * width;
}

areaInMeters(getLength(), getWidth());

let sFArea = sMArea * 10.7639;

console.log(`The area of the room is ${sMArea} square meters (${sFArea} square feet).`)