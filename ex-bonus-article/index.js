/*
& Errors in JavaScript
~ The term 'bug' -> technical error
    ~ Dates back even earlier to 1878 with Thomas Edison
~ Common Errors:
    ~ SyntaxError -> happens when invalid JavaScript code is present while the program is running
    ~ Reference Error -> happens when you try to use a variable that isn't defined
    ~ TypeError -> happens whena data type is being misused during an operation
*/


/*
& SyntaxError
~ This is a common error
~ This error comes from some mistake in the actual JS code, such as missing a period or parentheses
*/
// console.log('Hello, World!';
//~ The error message -> SyntaxError: missing ) after argument list
//~ Some error messages are not so straightforward and will require real detective work
//~ To avoid this error it is best to write code in an editor that will highlight syntax errors so they can be caught early on


/*
& ReferenceError
~ This error occures when you're trying to use a variable that hasn't beem defined yet
*/
// let score = x + 2;

// console.log(score);
/*
~ The error message -> ReferenceError: x is not defined
~ Since we didn't define an 'x' variable and so JS doesn't know how to move forward
~ To avoid this error, make sure all variables were at least defined with 'let' or 'const' beforeheand
~ It is possible to use ctrl + f to search for a specific variable name
*/


/*
& TypeError
~ This error tends to happen since dealing with various data types in JS
~ Especially when trying to change the value of a const constant variable
*/
// const meaningOfLife = 42;
// meaningOfLife = 43;

// console.log(meaningOfLife);
/*
~ The error message -> TypeError: Assignment to constant variable
~ You cannot change a const variable
~ To avoid this error, make sure all of your variables are at least defined with 'let' and 'const'
~ Only use 'const' varibales you don't intend to change; use 'let' for the ones that may change
*/

//& Bonus: Fruit Finder
//~ Check this small program that has a few errors and fix it from the error messages
let apples = 5;
let oranges = 15;
let bananas = 3;

// console.log('I have ' + apples + ' apples 🍎);
console.log('I have ' + apples + ' apples 🍎');
// console.log('I have' + oranges + 'oranges 🍊';
console.log('I have ' + oranges + ' oranges 🍊');

//~ If there are several errors best to start working with the first (topmost) error and knocking that out first. Then work on the errors following that
