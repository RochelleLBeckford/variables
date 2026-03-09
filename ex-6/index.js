//& Let & Const

//& Variables
/*
~ JS variables are used for storing data values that can be used later in the program
~ Each variable has a name and they hold a value

~ To create or declar a variable, we need a "let" or "const" keyword
    ~ let -> used for variables where the value will change
    ~ const -> used for variables where the values will stay constant
~ After the keyword, a variable name is needed, an = sign and a value:
    ~ keyword name = value;
*/
//& Some examples of variable declarations:
// const userId = "1618033988";
// let userName = "Leeroy Jenkins";

/*
~ variable names like userName are written in camelCase, where the first word is all lowercase and the first letter of all other words are capitalized. This convention is used for variable names made of more than one word

~ The = equal sign means assignment
    ~ Assigning the value "1618033988" to the const variable userId
    ~ Assigning the value "Leroy Jenkins" to the let variable userName
~ For a let variable -> its value can be changed or print it out
*/

// userName = "Leeroy05";

// console.log(userName); //~ The output: Leeroy05
/*
~ "Leeroy Jenkins" was originally assigned to userName variable
~ Then reassigned with a new value -> "Leeroy05" and then print it out
*/

//~ For a const variable -> it's value cannot be changed but it can still be printed out
// console.log(userId); //~ The output: 1618033988

//& If try to reassign a new value to a const variable or create one without a value, an error message will appear
// const userId = "1618033988";
// const userId = "8675309";
//~ The error message -> SyntaxError: Identifier 'userId' has already been declared

/*
& Create 4 variables for building a user profile on your favorite website:
    ~ Two const variables for your first name and favorite color
    ~ Two let variables for your current location and mood
~ Lastly, print them out with console.log()
~ Reassign a new value to at least one of the let variabls and print it one more time with console.log()
*/

const firstName = "EtariaL33";
const favoriteColor = "apple green and cherry blossom pink";

let location = "US";
let mood = "determined";

// console.log(firstName);
// console.log(favoriteColor);
// console.log(location);
// console.log(mood);

//~ Reassign a new value to a let variable
mood = "Working diligently for the life I desire.";

console.log(firstName);
console.log(favoriteColor);
console.log(location);
console.log(mood);

