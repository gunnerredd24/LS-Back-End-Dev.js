let rLSync = require('readline-sync');

let inputWidth = rLSync.question(`Enter the width of the room in meters: \n`);
let inputLength = rLSync.question(`Enter the length of the room in meters: \n`);

function calculateRoomArea(length, width) {
  var areaInMeters = length * width;
  var areaInFeet = 10.7639 * areaInMeters;
  areaInFeet = Math.round(areaInFeet * 100) / 100;
  console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`)
}

calculateRoomArea(inputLength, inputWidth);