// var-nah don't use, let, const
let age = 30; 
age = 31 // const will throw error

console.log(age);

// Use const unless you already know you are going to change it
// const must be initialized

// Strings, Numbers, Boolean, null, undefined, Symbol
const name = 'John'; // semi-colons aren't mandatory, but common
const age2 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined
 
console.log(typeof name);

// Concatenation
console.log('My name is '+ name + 'and I am' + age); // old way
console.log(`My name is ${name} and I am ${age}`);
hello = `My name is ${name} and I am ${age}`;

const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5));
