// My orignal code:
// function xor(arg1, arg2) {
//   if(Boolean(arg1) == true){
//     if(Boolean(arg2) == false){
//       return true;
//     } else return false;
//   }

//   if(Boolean(arg1) == false) {
//     if(Boolean(arg2) == true) {
//       return true;
//     } else return false;
//   }
// 

// A more efficent and simple way to make an exclusively true xor function.

function xor(value1, value2) {
  return Boolean((value1 && !value2) || (value2 && !value1));
}

console.log(xor(5 , 0) === true);
console.log(xor(false , true) === true);
console.log(xor(1 , 1) === false);
console.log(xor(true , true) === false);
console.log(xor(0 , false) === false);
console.log(xor(0 , 0) === false);


//This Xor function could have a lot of good uses, going along with the two light swtiches example, I think it would be useful when designing a garage door for a couple cars with multiple switches.