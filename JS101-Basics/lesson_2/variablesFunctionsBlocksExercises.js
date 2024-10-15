/*
Q1: It will log ["red", "green", "blue", "yellow"]. This is because in the function we have a parameter that points to the same array as the colors
on line 2 and in the function we pass this array as an argument and then mutate the array.

Q2: it will log ["red", "green", "blue", undefined]. This is because there are two parameters in the function and when the line 2 array is passed
to the function the parameter and line 2 array point to the same array but the color on line 1 gets shadowed by the parameter in the function that
is set to undefined because no argument was made for it. This then pushes undefined to colors and mutates it changing the colors array on line2.

Q3: It will log ["red", "green", "blue", "purple", "pink"]. This is because we declare and initialize color1 color2 and colors on
lines 1-3.(color1 and color2 being primitive values and colors being an array.) then we call the function on line 9 passing colors as the first
parameter and then color1, which colors is pass by reference and color1 is pass by value. This makes it so colors in the function and colors on
line3 point to the same array. This makes it so purple is pushed and mutates the colors outside of the function. Then we do the same thing calling
the function again that has been mutated and then pushing pink this time.

Q4: It will log ["red", "green", "blue", "purple", "pink"]. This is because one lines 1-3 again we declare and intialize the same primitive values
and array. Then on line 10 we declare a variable called newColors and initialize it = to the function with colors and color1 as arguments. This
ultimately mutates colors and returns the value of colors. So newColors is intialized to the colors. This gives them the same reference to the
same array. Then the function is called again with newColors as the argument this time and color2 as the argument as well. This ultimately mutates
newColors and returns it. Because colors and newColors reference the same array, colors gets mutated as well.

Q5: It will log ["red", "green", "blue"]. This is because we declare and initialize color to "purple" and colors to ["red", "green", "blue"],
then we initialize newColors to the value of removeColor(colors). In this function it mutates colors by removing the end value of the array.
Then it reassigns color to blue with this method. and returns colors. So now newColors references the same array colors does which just got
mutated. Now colors and color get passed to the addColor function. This function adds blue to the end of the array and returns the function.
This again mutates the array so it alters newColors as well. which then gets logged to the console.

Q6: It will log hello!!!, Hello, and hello!!!. This is because the function in captialize does not reassign word so the returned value
capitalizedWord is capitalized but nothing else is. The function exclaim does reassign word to "hello!!!". Making word and exclaimedWord have the
same value.

Q7: It will log "hello", "Hello", and "Hello!!!". This is because we declare and initialize "hello" to word. Then we declare and intialize
capitlaizedWord to the value of capitalize(word). In this function we capitlaize the letter H and then slice the string to then concat it back
into Hello and return it. Then we declare and initalize exclaimedWord to exclaim(capitalizedWord). This function takes Hello as the argument and
returns Hello!!!. Then we log all the variables to the console.

*/