//& Temperature

/*
& Operators
~ Variables can be used with arithmetic operators to perform math calculations
~ JS has the following arithmetic operators:
    ~ + Addition
    ~ - Subtraction
    ~ * Multiplication
    ~ / Division
    ~ % Modulo (returns the remainder)
    ~ ** Exponent
*/

//~ Declare the score and initialize it
let score = 0;

score = 4 + 3; //~ The score is now 7
score = 4 - 3; //~ The score is now 1
score = 4 * 3; //~ The score is now 12
score = 4 / 3; //~ The score is now 1.3333
score = 4 % 3; //~ The score is now 1

console.log(score);
console.log();

//~ The following code calculates a 20% tip by adding the total price of a puzza and code, and then multiplying by a decimal number (also known as a float);
const pizza = 2.99;
const coke = 0.99;

let total = pizza + coke;
let tip = total * 0.2;

// ~ Output the values
console.log('The total of the order is ' + total); //~ The output is 3.98
console.log('The tip which is 20% of the total is ' + tip); //~ The output is 0.796
console.log();

// ~ Another way to write this is one line of code is with parentheses ():
let tipAnotherWay = (pizza + coke) * 0.2;

// ~ Output the values
console.log(tipAnotherWay);

//~ In JS anything in parentheses is evaluated first
//~ Thus the values of 'pizza' and 'coke' are added together before the total is multiplied by 0.2

