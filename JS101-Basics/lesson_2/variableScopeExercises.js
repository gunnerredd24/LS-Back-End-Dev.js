//Q1: this will log 10 to the console. This is because the function gets called and it reassigns a variable from the global scope.

//Q2: This will log 5 to the console and then 10. This is because in line 1 5 gets assigned to num. And then we call the function which first line on the body logs the value of num.
// Then it reassigns the value to 10 and after the function call it logs again.

//Q3: It will log 5 to the console. This is because a whole new variable is defined in myFunc, instead of reassigning the global variable, and the num inside the function is only limited
// to that function.

//Q4: It will not log anything, It will log a reference error. Because in the function the first thing that happens is num gets logged to the console. But num gets declared and assigned right
// after this which you cannot access this variable before it is declared and assigned. Now there is a global variable on the outside with the same name. But that variable gets shadowed by the
// inner scope variable.

//Q5: This will log 5 to the console. This is because on line 1 we have num declared and assigned to 5. Then the myFunc function gets called but with no arguement even though the function has a
// parameter. So essentially undefined gets passed as the arguement and the function doesn't reassign or return anything. num = 10 evaluates to false but that doesn't even get returned. And
// then on line 8 5 gets logged to the console.

//Q6: This will log 3 to the console. This is because in the while block, it accesses the num variable on line 1 and this evaluates to true in the while block until the num variable gets
// changed to 3. Then it gets logged to the console.

//Q7: This will log 1 to the console. This is because in the while statement it will access the variable on line 1 which evaluates to true so the while loop will execute, Then a num inside
// the block scope gets declared and assigned to 5 and then that num gets 1 added to it which is then 6. THen it exits the loop and loogs num to the console, but because the num that = 6 is
// limited to the block scope it will not be used to log to the console. instead the globally scoped variable num will which is still.

// ^This will actually log nothing ot the console, because everything I said was right except that the num variable in the loop statement never changes therefore staying in an infinite loop.