//& BMI

/*
& Exponents
~ JS can also perform exponetation such as 2^3 or 10 ^2
~ In written math an exponent is written as superscript number), but typing superscript numbers is not alwaus easy on modern keyboards
~ In JS ** notation is for exponentation
*/

let score = 0;

score = 2 ** 2; //~ The score is 4
score = 2 ** 3; //~ The score is now 8
score = 2 ** 4; //~ The score is now 16
score = 2 ** 5; //~ The score is now 32

console.log(score); //~ The output is 32
console.log();

/*
& Body Mass Index -> BMI
~ Created by a Belgian mathematician in the 1850s and it is used by health and nutrition professionals to estimate human body fat in certain populations

~ It is computed by taking an individual's weight (mass) in kilograms and dividing it by the square of their height in meters

~ bmi = mass / height^2
~ BMI is an archaic and oversimplified way to measure personal health -> it was created by a mathematician
*/

//~ Declare and initialize the variables
let mass = 205;
const height = 70;

let bmi = mass / height ** 2;

//~ Output the values
console.log(mass);
console.log(height);
console.log(bmi);

