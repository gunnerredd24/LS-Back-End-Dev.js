function isLeapYear(year) {
  if(year < 0) return;
  
  if(year % 4 !== 0) return false;
  else if(year % 100 !== 0) return true;
  else if(year % 400 === 0) return true;
  else return false;
}

console.log(isLeapYear(2016));      // True
console.log(isLeapYear(2015));      // False
console.log(isLeapYear(2100));      // False
console.log(isLeapYear(2400));      // True
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true