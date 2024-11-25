/*
Q1: It will log 'Hello' twice. This is because it logs 'Hello' in the function and logs that to the console after wihtout making any changes to myWord.

Q2: It will log 'Hello' and 'HELLO'. This is because the value of myWord when it reaches line 2 is 'Hello' and then through the function it returns 'HELLO' so this then reassigns myWord on line 8
to 'HELLO' and logs it right after.

Q3: it will log 'Hello' 'Hello' and 'HELLO' again. This is because the value of myWord which is passed as an arguement to changeMyWord is 'hello' which then gets logged on line 2.
Then it gets returned as 'HELLO' which the function is used to declare and assign myOtherWord. which myWord stays the same.

Q4: It will log ['Hello', 'Goodbye'] and ['Hi', 'Goodbye']. This is because we are now on objects so it is pass by reference. So in the function when we reassign the first element of myWords,
it mutates it and actually changes it outside of the function. and before this happens it gets logged like normal.

Q5: It will log ['Hello', 'Goodbye'] twice. this is because on line 2 we log the declared value of myWords and then it trys to reassign the entire array of myWords,
but it does not return the value and reassigning works differently than mutating. thus it logs the same thing twice.
*/

const isColorValid = color => ["blue", "green"].includes(color);
console.log(isColorValid("blue"));
console.log(isColorValid("red"));