let pokemonList = [
	{
		name: 'Bulbasaur',
		height: 0.7,
		types: ['grass', 'poison'],
	},
	{
		name: 'Vapereon',
		height: 1.0,
		types: ['water'],
	},

	{
		name: 'Vulpix',
		height: 0.6,
		types: ['fire'],
	},
];

//Function Parameters & Arguments

let pokemonList2 = [
	{
		name: 'Metapod',
		height: 0.7,
		types: ['Bug'],
	},
	{
		name: 'Charizad',
		height: 1.7,
		types: ['fire', 'flying'],
	},
	{
		name: 'Machamp',
		height: 1.6,
		types: ['fighting'],
	},
];

//create a for loop that iterates over each item in pokemonList array
//write the name and height of each pokemon to the document
//if the pokemon is larger or equal to 1.0 = Wow, that’s big!

function printArraysDetails(list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i].height >= 1.0) {
			document.write(
				list[i].name + ' (height: ' + list[i].height + ') - Wow, that’s big!',
			);
			document.write('<br>');
		} else {
			document.write(list[i].name + ' (height: ' + list[i].height + ')');
			document.write('<br>');
		}
	}
}
printArraysDetails(pokemonList);
printArraysDetails(pokemonList2);

//Defining and Calling Functions
function ShowMessage() {
	console.log('Hello Ron!');
	document.write('Hello Ron!');
}
ShowMessage();

//Functions with return Statement
function Sum(val1, val2) {
	return val1 + val2;
}

let result = Sum(5, 20);
console.log(result);

//Function Expression
let add = function sum(val1, val2) {
	return val1 + val2;
};
let result1 = add(100, 200);
console.log(result1);
// let result2 = sum(100, 200);
// console.log(result2);

//Anonymous Function
let Message = function () {
	console.log('Hello World!');
};
Message();

let sayHello = function (firstName) {
	console.log('Hello ' + firstName);
};

sayHello('Bobby');
sayHello();

//Callback Functions
function functionOne(param) {
	return param;
}

function functionTwo(param) {
	//some code
	return param + 2;
}
console.log(functionOne(2));
console.log(functionTwo(functionOne(2)));

//Pure Functions
function addTwo(number) {
	return number + 2;
}
console.log(addTwo(5));

let age = 10;

function getNewAge(age) {
	age = age + 1;
	return age;
}

console.log(getNewAge(age));
console.log(age);

//The Function return Statement

function divide(dividend, divisor) {
	if (divisor === 0) {
		return 'You are trying to divide by zero';
	} else {
		let result = dividend / divisor;
		return result;
	}
}
console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));

// a function without a return statement
function add2(number1, number2) {
	console.log(number1 + number2);
}
let result3 = add2(1, 2);
console.log(result3);

// a function with a return statement
function multiply(number1, number2) {
	return number1 * number2;
}
let result4 = multiply(3, 5);
console.log(result4);

// Assigning a function to a variable
let add4 = function (number1, number2) {
	return number1 + number2;
};

// Assigning a function to an object property
let person = {};

person.tellMyAge = function () {
	return 42;
};

//The this Keyword

let dog = {
	type: 'pug',
	age: 3,
	name: 'Margot',
	speak: function () {
		console.log('Woof! I am ' + this.name);
	},
};
dog.speak();

//Arrow Functions

let addThree = (number4) => number4 + 2;

// The example above is the same as writing this:

let add3 = function (number4) {
	return number + 2;
};

//Predefined Functions

//console.log('Hello!');
//console.warn('Warning!');
//console.error('Error!');

// let name = prompt('Please enter your name!');
// console.log(name);

// let isAccepted = confirm('Do you accept?');
// console.log(isAccepted);

// function runThisLater() {
// 	console.log('Hello!');
// }
//setTimeout(runThisLater, 1000); // Run this in 1000ms

// Built-in Functions for Objects & Arrays

let anne = {
	name: 'Anne',
	age: 38,
	children: [],
};
let allProperties = Object.keys(anne);

let names = ['John', 'Anne', 'Carly'];
console.log(names.length); // 3

let names2 = ['John', 'Anne', 'Carly'];
//names2.push('Bob'); // Add to the end of the array
//names2.unshift('Julia'); // Add to the start of the array (as new first item)
// names2.pop(); // Remove the LAST item from the array (Bob)
// names2.shift(); // Remove the FIRST item from the array (Julia)

console.log(names2);

function randomNumber() {
	var baseNum = 2;
}
console.log(randomNumber(baseNum));
