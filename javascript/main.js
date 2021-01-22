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

// Ternary
const b = 10;

const color = b > 10 ? 'blue' : 'red';
console.log(color);

// switch
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}

// functions

function addNums(num1=1, num2=1) {
    console.log(num1 + num2);
    return num1 + num2;
}

addNums(5, 4);
addNums();
console.log(addNums(3,4));

// arrow function

const addNumsArrow = (num1 = 1, num2 = 1) => {
    return num1, num2;
}

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }
// With ES6, we get classes. Same stuff under the hood, but syntatic sugar.
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate
const person1 = new Person('James', 'Bond', '1-1-1901');
const person2 = new Person('Mary', 'Bond', '2-2-1980');
console.log(person1);

// DOM
console.log(window);
//window.alert(1);
//alert(1);
// Single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple element selectors
console.log(document.querySelectorAll('.item')); // can use array methods
console.log(document.getElementsByClassName('item')); // can't use array methods
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'John';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red'; // Dynamic way to change color of btn

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form')
    .style.background = '#acc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>helllo</h1>'
    
});

