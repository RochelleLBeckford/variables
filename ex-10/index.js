//& Planet Weight
/*
& Variables in JS:
~ 'let' and 'const' keywords
~ Data types -> Numbers, Strings, Booleans, Null, & Undefiend
~ Arithmetic operators -> +, -, *, /
~ % modulo operator -> finds the remainder of division between two numbers
~ ** exponent operator -> raises one number to the power of another number
*/

/*
& The year os 2099 we can now take a vacation on the moon or Mars! 🚀
~ Create a weight conversion program that:
    ~ Takes your weight on Earth
    ~ Converts it to your weight on either the moon or Mars

~ To calculate your weight on Mars:
    ~ destination_weight = earth_weight x 0.38
~ The output should look like the following:
    ~ Your weight on Earth is 210 pounds.
    ~ Your weight on Mars is 79.8 poundds.
*/

//~ Declare and initialize the variables
let earthWeight = 205;
let destinationWeight = earthWeight * 0.38;

//~ Output the values
console.log('Your weight on Earth is ' + earthWeight + ' pounds.');
console.log('Your weight on Mars is ' + destinationWeight + ' pounds.');

