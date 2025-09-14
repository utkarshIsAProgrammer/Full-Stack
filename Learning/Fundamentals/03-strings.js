// Making strings
let message = 'Hello! I am learning Javascript.';
console.log(message);

// Making string literals
let myName = 'Panchajanya';
console.log(`Hi! I am ${myName} aspiring full stack developer.`);

// Multiline string
console.log(`
Full Stack Development
AI Engineer
Data Scientist
Data Analyst
Python Developer
`);

// Escape Characters
console.log('I am going\nin a new line.');
console.log('\\ A backslash is leading me.');
console.log('\tA tab is leading me.');
console.log('A\b There is a hidden backslash.');

// Getting string length
console.log(message.length);

// Accessing string characters
let myLanguage = 'Javascript';
console.log(myLanguage[0], myLanguage[1], myLanguage[8], myLanguage.at[9]);

// Changing string to Uppercase
console.log(myLanguage.toUpperCase());
console.log(myLanguage.toLowerCase());

// Searching for a character in a string
console.log(myLanguage.indexOf('c'));
console.log(myLanguage.indexOf('pt'));

// Searching for a character at a specified index in a string
console.log(myLanguage.indexOf('a', 2));

// Searching for last index of a character in a string
console.log(myLanguage.lastIndexOf('a'));

// Check is a string includes a specified character
console.log(myLanguage.includes('p'));

// Check if a string starts with a specified character
console.log(myLanguage.startsWith('j'));
console.log(myLanguage.startsWith('J'));

// Check if a string ends with a specified character
console.log(myLanguage.endsWith('t'));
console.log(myLanguage.endsWith('T'));

// String slicing
console.log(myLanguage.slice(0, 4));
console.log(myLanguage.slice(0));
console.log(myLanguage.slice(-6));

// Comparing strings
console.log('a' > 'z');
console.log('a' > 'Z'); // lowercase always greater than uppercase
console.log('h' > 'a');
