// Exercises from: https://gist.github.com/BenyamWorku/e5ad68e3204cf1c6b79a527fee07872e

/*
---------------------------- Exercise 1 ----------------------------
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/

console.log("EXERCISE 1");

let item = ["Egg", 0.25, 12];

let [name, price, quantity] = item;

console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
console.log();

/**
Exercise 2
Rewrite the code below to assign each number to the right variable.
*/
console.log("EXERCISE 2");

let numbers = [3, 5, 4, 2, 6, 1];

let [three, five, four, two, six, one] = numbers;

console.log(
  `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
);
console.log();

/**
Exercise 3
We have an object called 'user'.
Write the destructuring assignment that reads:
- 'name' property into the variable 'name'.
- 'years' property into the variable 'age'.
- 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
*/
console.log("EXERCISE 3");

let user = { firstName: "John", years: 30 };

// your code to the left side:
let {firstName, years: age, isAdmin = user.isAdmin ? true : false } = user;

console.log(firstName); // John
console.log(age); // 30
console.log(isAdmin); // false
console.log();

/**
Exercise 4
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
console.log("EXERCISE 4");

let person = [12, "Chris", "Owen"];

let [personAge, fName, lName ] = person;

console.log(`Person - Age: ${personAge}, Name: ${fName} ${lName}`);
console.log();

/** 
Exercise 5
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
Make sure not to have unused variables.
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
console.log("EXERCISE 5");

let person2 = ["Chris", 12, "Owen"];

let [nameFirst, , nameLast] = person2;

console.log(`Name: ${nameFirst} ${nameLast}`);
console.log();

/** 
Exercise 6
Using Array Destructuring get the last name from the array. 
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
console.log("EXERCISE 6");

const students = ['Christina', 'Jon', 'Alexandare'];

// Write your code here
const [name1, name2, name3] = students;

console.log(name3);
console.log();

/**
Exercise 7
Using Array Destructuring get all of the names from this Nested Array
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
console.log("EXERCISE 7");

const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
];

// Write your code here
const [student1, [student2, student3], [student4, student5]
] = moreStudents;

console.log(student1, student2, student3, student4, student5);
