/*
& Data Types
~ There are many data types in JS suchs as number, string, boolean, and undefined

& Number
~ A number can be any integer or decimal number
~ It can represent whole numbers, fractions or precise measurements
*/
let year = 2023;
let age = 28;
let mealCost = 12.99;
const pi = 3.14;
const daysOfWeek = 7;

// ~ Output the values
console.log(year); //~ The output -> 2023
console.log(age); //~ The output -> 28
console.log(mealCost); //~ The output -> 12.99
console.log(pi); //~ The output -> 3.14
console.log(daysOfWeek); //~ The output -> 7
console.log();


/*
& String
~ A string is used for storing text or sequenve of characters
~ Wrapped in double quotes " " or single quotes ''
*/
let message = "good nite";
let user = '@zuck';
const company = "Codédex";

// ~ Output the messages
console.log(message); //~ The output -> good nite
console.log(user); //~ The output -> @zuck
console.log(company); //~ The output -> Codédex
console.log();


/*
& Boolean
~ A boolean data type or bool stores a value that can only be either true or false
~ It is lowercased true or false
*/
let hungry = true;
let lateToMeeting = false;
const earthIsFlat = false;

// ~ Output the messages
console.log(hungry); //~ The output -> true
console.log(lateToMeeting); //~ The output -> false
console.log(earthIsFlat); //~ The output -> false
console.log();


/*
& Undefined
~ Any variable that is declared but hasn't yet received a value is undefined
~ It can happen when a variable is declared without being assigned a value
~ Or when it is explicitly assigned a value of 'undefined'
*/
let startDate = '01/23/2022';
let endDate;

console.log(startDate); //~ The output -> 01/23/2022
console.log(endDate); //~ The output -> undefined
console.log();

//~ This is useful if you create a varuable but haven't yet decided what value it should have

/*
& Create some variables for your favorite company with these datatypes:
~ companyName -> a string
~ foudingYear -> a number
~ isActive -> a Boolean
~ fundingAmount -> undefined
*/

let companyName = 'Apple';
const foundingYear = '1976';
let isActive = true;
let fundingAmount;

// ~ Output the messages
console.log('The name of my favorite company is ' + companyName);
console.log(companyName + ' was founded in ' + foundingYear);
console.log('Is '+ companyName + ' active? ' + isActive );
console.log('The funding amount for ' + companyName + ' is ' + fundingAmount);
