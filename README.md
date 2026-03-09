<!-- & This creates a banner for the ReadMe -->
<img src="img/maiden-wine-viewing-the-cherry-blossoms.png" alt="" width="100%" height="475">

# <p align="center">🌸 Variable: JavaScript's Treasure Boxes 🌸</p>

## Practice: Learning how to store and manage data in JavaScript

### Understanding JS -> Giving our programs a memory that lasts

<hr>

## <p align="center">💫 Overview</p>
-   [ ] If the console was learning to speak to code, then variables teach my code how to remember. They're like little labeled treasure boxes where I can stash away information -> names, numbers, moods, whatever matters and pull them back out whenever I need them. This is where my programs stop being just one-and-done calculators and start holding onto stuff that makes them useful.

<hr>

## <p align="center">🎨 Key Design Features</p>
-   [ ] <b>What are Variables?</b>
    -   [ ] JavaScript variables are used for storing data values that can be used later in the program. Each variable has a name and holds a value like a labeled jar on a shelf waiting to be filled.
-   [ ] <b>Let vs Const</b>
    -   [ ] Two ways to declare variables in JavaScript, each with its own personality
        -   [ ] <b>let:</b>
            -   [ ] Is for values that will change over time like your mood or location
        -   [ ] <b>const:</b>
            -   [ ] Is for values that stay constant like your birth date or name
-   [ ] <b>Data Types</b>
    -   [ ] Numbers, Strings, Booleans, and Undefined:
        -   [ ] Each type of data has its own way of behaving
-   [ ] <b>Arithmetic Operators</b>
    -   [ ] The math tools: +, -, *, /, %, and ** that let us calculate and transform our data
-   [ ] <b>Errors</b>
    -   [ ] SyntaxError, ReferenceError, and TypeError:
        -   [ ] The bugs that teach us what not to do and how to fix the error

<hr>

-   [ ] Simple practice to understand how JavaScript stores and manipulates information
    -   [ ] Variables give our programs memory and personally
    -   [ ] Different data types let us store different kinds of information
    -   [ ] Operators let us combine, compare, and calculate with our stored values
    -   [ ] Errors aren't failures -> they're the program telling us exactly what went wrong

<hr>

## <p align="center">👩🏾‍💻 JavaScript Outline</p>
-   [ ] The <b>let</b> keyword:
    -   [ ] Declares a variable whose value can be changed later
    -   [ ] Perfect for things that evolve -> location, mood, age, score
        ```javascript
            let mood = 'determined';

            console.log(mood); //~ The output: determined

            //~ Change the value of mood
            mood = 'Working diligently';
            console.log(mood); //~ The output: Working diligently
        ```
-   [ ] The <b>const</b> keyword:
    -   [ ] Declare a variable whose value stays constant throughout the program
    -   [ ] Perfect for things that shouldn't change -> birth date, user ID, favorite color
        ```javascript
            const userId = '1234567';
            console.log(userId); //~ The output : 1234567
            */

           //~ If try to change a const variable it will cause an Error
        ```
-   [ ] Variable naming with <b>camelCase</b>:
    -   [ ] A convention where the first word is lowercase and each following word starts with a capital letter
    -   [ ] It makes multi-word variable names easier to read
        ```javascript
            let userName = 'Eatria Lee';
            let isBuildingLegos = true;
        ```
-   [ ] The <b>Number</b> data type:
    -   [ ] Can be an integer or decimal number
    -   [ ] Used for whole numbers, fractions, or precise measurements
        ```javascript
            let year = 2026;
            const pi = 3.14;
            console.log(year); //~ The output: 2026
            console.log(pi); //~ The output: 3.14
        ```
-   [ ] The <b>String</b> data type:
    -   [ ] Used for strong text or sequences of characters
    -   [ ] Wrapped with double quotes "" or single quotes ''
    -   [ ] Can be joined together with the + operator
        ```javascript
            let message = 'Matcha 🍵';
            const company = 'Nami Matcha';
            console.log(message); //~ The output: Matcha 🍵
            console.log('My favorite Matcha company is ' + company); //~ The output: My favorite Matcha company is Nami Matcha
        ```
-   [ ] The <b>Boolean</b> data type:
    -   [ ] Stores a value that can only be either true or false
    -   [ ] Perfect for yes/no, on/off. active/inactive situations
        ```javascript
            let hungry = true;
            let antarticaIsWarm = false;
            console.log(hungry); //~ The output: true
            console.log(antarticaIsWarm); //~ The output: false
        ```
-   [ ] The <b>Undefined</b> data type:
    -   [ ] Any variable that is declared but hasn't yet revceived a value
    -   [ ] Can happen when variable is declared without being assigned a value
    -   [ ] Useful when you create a variable but haven't decided what value it should have yet
        ```javascript
            let startDate = '01/05/26';
            let endDate; //~ No value assigned yet
            console.loge(startDate); //~ The output: 01/05/26
            console.loge(endDate); //~ The output: undefined
        ```
-   [ ] <b>Arithmetic Operators</b>:
    -   [ ] Variables can be used with operatord to perform math calculations
    -   [ ] JavaScript follows standard order of operations (parentheses first)
        ```javascript
            //~ Basic arithmetic
            let score = 0;
            score = 4 + 3; //~ The score is now 7
            score = 4 - 3; //~ The score is now 1
            score = 4 * 3; //~ The score is now 12
            score = 4 / 3; //~ The score is now 1.3333
            console.log(score); //~ The output: 1.3333
        ```
-   [ ] The <b>Modulo Operator (%)</b>:
    -   [ ] Returns the remainder after division
    -   [ ] Great for finding if numbers are even or odd, or for cycling through values
        ```javascript
            score = 4 % 3;
            //~ 4 divided by 3 is 1 with remainder 1, so score is now 1
            console.log(score); //~ The output: 1

            //~ 10 % 3 would be 1 (10 / 3 = 3 remainder 1)
            //~ 16 % 4 would be 0 (16 / 4 = remainder 0)
        ```
-   [ ] The <b>Exponent Operator (**)</b>:
    -   [ ] Raises one number to the power of another number
    -   [ ] Written as base ** exponent
        ```javascript
            let score = 0;
            score = 2 ** 2; //~ 2^2 = 4
            score = 2 ** 3; //~ 2^3 = 8
            score = 2 ** 4; //~ 2^4 = 16
            score = 2 ** 5; //~ 2^5 = 32
            console.log(score) //~ The output: 32
        ```
-   [ ] <b>SyntaxError</b>:
    -   [ ] Happens when invalid JavaScript code is present
    -   [ ] Often from missing punctuation like parentheses, quotes, or brackets
        ```javascript
            //~ This would cause an error;
            console.log('Hello, World!';
            //~ SyntaxError: missing ) after arguement list

            //~ The fix:
            console.log('Hello, World!');
        ```
-   [ ] <b>ReferenceError</b>:
    -   [ ] Happens when trying to use a variable that hasn't been defined
    -   [ ] The variable doesn't exist yet, so JavaScript doesn't know what to do
        ```javascript
            //~ This would cause an error:
            let score = x + 2;
            //~ ReferenceError: x is not defined

            //~ The fix: define x first
            let x = 5;
            let score = x +2; //~ Now it works
        ```
-   [ ] <b>TypeError</b>:
    -   [ ] Happens when a data type is being misused during an operation
    -   [ ] Common when trying to change a const variable
        ```javascript
            //~ This would cause an error:
            const meaningOfLife = 42;
            meaningOfLife = 43;
            //~ TypeError: Assignment to constant variable

            //~ The fix: use let if the value needs to change
            let meaningOfLife = 42;
            meaningOfLife = 43; //~ Now it works
        ```


<hr>

## <p align="center">✨ Encompassed Technologies</p>
-   [ ] <b>JavaScript:</b>
    -   [ ] The programming language that is the magic behind the scenes that makes webpages react, calculate, and come alive. Turning static pages into conversations.
-   [ ] <b>Browser Developer Tools:</b>
    -   [ ] The little laboratory inside browsers likes Chrome and Safari where you can write, test, and debug code without messing up the actual webpage
-   [ ] <b>The Console:</b>
    -   [ ] The dedicated space to output a message and experimentation
-   [ ] <b>VS Code:</b>
    -   [ ] A lightweight but powerful source code editor that provides an integrated terminal, syntax highlighting, and extensions for writing and testing code efficiently
        -   [ ] A digital notebook where all the coding happens.

