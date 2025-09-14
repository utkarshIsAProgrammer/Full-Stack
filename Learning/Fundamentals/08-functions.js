// Function declaration with default parameter
function greetUser(name = 'User') {
  // Local variable
  let message = `Hello! ${name}`;
  // Return statement
  return message;
}

let greetMessage = greetUser('Panchajanya');
console.log(greetMessage);

// Making a function expression
let greetUserByName = function (name = 'User') {
  return `Hello! ${name}`;
};
console.log(greetUserByName());

// Making a callback function
function messageToTheWorld(callback) {
  let myMessage = 'Hello everyone! Programming is future';
  return callback(myMessage);
}

// Callback function
function message(text) {
  console.log(text);
}

messageToTheWorld(message);

// Making arrow function
let sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 7));
