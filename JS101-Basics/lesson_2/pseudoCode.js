// USE SUBPROCESSES TO HELP KEEP YOUR FLOWCHART AND PSEUDOCODE LOGICAL.
// Write down flowcharts for subprocceses to break it down and take it one step at a time.


// Define a function that takes 2 parameters.
// return parameter 1 + parameter 2.
// Call function and input your two numbers into the function as arguements.

/* START 
# write a function that returns the sum of two numbers.
SET function sumOfNumbers(num1, num2)
SET sum = num1 + num2
READ sum

PRINT sumOfNumbers(and input desired numbers)
END
*/

// A function that takes an array of strings, and returns a string that is all those strings concatenated together.

// Define a function called concatenateStrings.
// that takes one parameter(an array).
// In the body we will return the method array.join('')

// Call the function with the desired input array and print it to the console.

/*
START

SET function concatenateStrings(array) 

In the body of the function return array.join('')

PRINT concatenateStrings(desired array)

END
*/


//# A method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element.

// define a function called everyOther containing one parameter (an array of integers)

// In the body we need to define an empty array called output.
// We will then use a method to get the keys of each value and loop through each one and test if they are odd or even.
// We will then only push the even ones to the output array.
// We will then return the output array.

// We will then call the function with the desired array of integers as the arguement.


/* 
START

SET function everyOther(arrayInt)

In the body, SET output = [];

SET iterator = arrayInt.keys()

FOR (const key of iterator) {
  IF (key % 2 === 0) output.push(arrayInt[key]);
}

Out of the function body,

PRINT everyOther([desired int array])

END
*/

function everyOther(arrayInt) {
  let output = [];

  let iterator = arrayInt.keys();

  for (const key of iterator) {
    if (key % 2 === 0) output.push(arrayInt[key]);
  }

  return output;
}

console.log(everyOther([1,4,7,2,5]));

// #4

// Create a function called thirdChar(searchString, searchChar)

//In the body,

// We need to set an if statement and search for the given character.
// If we find the character we should set it equal to char1 and continue the search from that character + 1.
// If we find another character we should set it equal to char2 continue the search from that character + 1.
// If at any point we don't find a character we should return null;
// If we do find the character we should set it equal to char3.
// We should then return char1 + char2 + char3 + 2 ( + 2 to make up for the extra adds to get off of char1 and char2 while continuing the search)

// return to the console thirdChar(desired string , desired character)


/*

START

SET function thirdChar(searchString, searchChar)

in the body, 

SET char1;
SET char2;
SET char3;

IF (searchstring.search(searchChar) >= 0) char1 = searchstring.search(searchChar)
ELSE return null;

IF (searchString[char1 + 1].search(searchChar) >= 0) char2 = searchString[char1 + 1].search(searchChar)
ELSE return null;

IF (searchString[char2 + 1].search(searchChar) >= 0) char3 = searchString[char2 + 1].search(searchChar)
ELSE return null;

return char3 + char1 + char2 + 2

End of function body,

PRINT thirdChar(searchString, searchChar)

END
*/

// #5

// We need to define a function called merge().
// that takes 2 parameters (array1, array2)

// in the body,

// We will set an empty array called mergedArray [];

// We will than make a loop to loop through both array1 and array2.
// at each iteration we will push the iteration to mergedArray from both array1 and 2.

// We will then return mergedArray;

// end of body,

// we will then print to the console the function with the desired arrays in it.

/*
START

SET function merge(array1, array2)

*Enter function body*

SET mergedArray = [];

SET iterator = 0
WHILE iterator < array1.length
*Enter loop body*

we will push each iteration of both arrays to merged array until the loop runs out.
iterator += 1

*Exit loop body*

READ mergedArray;

*Exit function body*

PRINT merge(desired arrays);

Exit
*/

