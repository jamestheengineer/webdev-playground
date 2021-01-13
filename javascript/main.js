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
console.log('My name is '+ name + ' and I am ' + age); // old way
console.log(`My name is ${name} and I am ${age}`);
hello = `My name is ${name} and I am ${age}`;

const s = 'technology, computers, it, code';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(', '));

// Arrays
/* Multi
line 
comment */
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes'; //notice you can still add even though const, you just can't reassign to a different array
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
Array.isArray(fruits);
console.log(fruits.indexOf('oranges'));
console.log(fruits);

// Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St.',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person, person.firstName, person.lastName);
console.log(person.hobbies[1]);

const { firstName, lastName, address: {city} } = person;
console.log(city);

person.email = 'john@gmail.com';

console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Buy a 4Runner',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Be happy about 4Runner',
        isCompleted: true,
    }
];

console.log(todos);

console.log(todos[1].text);

// convert to json
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// loops
for(let i = 0; i <= 10; i++) {
    console.log(i);
    console.log(`For Loops Number: ${i}`);
}

// while
let i = 0;
while(i < 10) {
    console.log(`While loop number: ${i}`);
    i++
}

for(let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);

// Conditionals
const num = 10;

if (num == '10') {
    console.log('num is 10');
}

// Triple also matches type
if (num === '10') {
    console.log('num is string 10');
} else if (x > 10) {
    console.log('greater than 10');
}
else {
    console.log('nah');
}