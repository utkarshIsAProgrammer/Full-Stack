// Making an object (method 1)
let user1 = new Object();

// Making an object (method 2)
let user2 = {};

// Making object with key and value (properties)
let user3 = {
  name: 'Jonathan',
  age: 26,
};

// Accessing property value
console.log(user3.name);
console.log(user3.age);

// Adding property
user3.isAdmin = false;
console.log(user3);

// Deleting property
delete user3.age;
console.log(user3);

// Adding multi-word property
user3['is a programmer'] = true;
console.log(user3);

// Shorthand properties
function makeUser(name, age) {
  return {
    name,
    age,
  };
}

user1 = makeUser('Harry', 19);
console.log(user1);

// Check if a property is present in object
console.log('name' in user1);
console.log('jobRole' in user1);

// for-in loop
for (let key in user3) {
  console.log(`${key} = ${user3[key]}`);
}

// Comparison by reference
user2 = user1;
console.log(user1 === user2);

user1['is a programmer'] = false;
console.log(user1, user2);

// Cloning objects
let clone = {};
for (let key in user1) {
  clone[key] = user1[key];
}
console.log(clone);

// Object.assign() method
let newClone = {};
Object.assign(newClone, user2);
console.log(newClone);

// Nested cloning
let user = {
  name: 'Morgan',
  sizes: {
    height: 182,
    width: 50,
  },
};

let anotherClone = structuredClone(user);
console.log(user.sizes === anotherClone.sizes);

user.sizes.width = 60;
console.log(clone.sizes.width);
