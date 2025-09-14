// Array declaration method 1
let emptyArray = new Array();

// Array declaration method 2
let languages = [];

languages = ['Javascript', 'React', 'Next', 'Typescript', 'Vue'];
console.log(languages);

// Accessing array elements
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);

// Replacing element in array
languages[4] = 'Node';
console.log(languages[4]);

// Add new element in array
languages[5] = 'Express';
console.log(languages);

// Getting last element from the array (using negative index)
console.log(languages.at(-2));

// Remove last element from the array
let poppedElement = languages.pop();
console.log(languages, poppedElement);

// Remove first element fro the array
let shiftedElement = languages.shift();
console.log(languages, shiftedElement);

// Add element to the last index of array
languages.push('GSAP');
console.log(languages);

// Add element to the first index of array
languages.unshift('Three.js');
console.log(languages);

// for-of loop
for (let language of languages) {
  console.log(language);
}

// Getting length of array
console.log(languages.length);

// Making a multidimensional array
let mdArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(mdArray);

// toString method returns a comma separated list of elements
console.log(languages.toString());

// NOTE: arrays are only equal when their references are same else they are not equal.
