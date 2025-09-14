// Variable declaration
let message;

// Variable assignment
message = 'Hello! I am a full stack developer.';

// Accessing variable
console.log(message);

// Variable declaration + assignment
let myName = 'Panchajanya';
console.log(myName);

// Declaring multiple variable  in one line
let favFruit = 'Pineapple',
  favLang = 'Python',
  favWork = 'Coding';
console.log(favFruit, favLang, favWork);

// Copying data of a variable yo another variable
let currentJobRole = 'Full Stack Developer';
let newJobRole = currentJobRole;
console.log(newJobRole);

// Variable naming convention
// 1. The name must contain only letters, digits, or the symbols "$" and "_".
// 2. The first character must not be a digit.
// 3. Reserved keywords cannot be used as a variable name.
// 4.Variable names are case sensitive.
// 5. Constant variable must have uppercase for those values that are hard to remember and must known before execution.

let $ = '$';
let _ = '_';
console.log(_ + $ + _);

// Making a constant variable
const myBirthday = '10 December 2005';
console.log(myBirthday);

const COLOR_ORANGE = '#FF7F00';
console.log(COLOR_ORANGE);
