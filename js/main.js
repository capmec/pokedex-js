// //forEach() Loops

// // let names = ['John', 'Anne', 'Carly'];

// console.log(
// 	'You could loop through the array using the traditional for block:',
// );
// let nameList = ['John', 'Anne', 'Carly'];

// for (let i = 0; i < nameList.length; i++) {
// 	console.log(nameList[i]);
// }

// console.log(
// 	'Another way you could iterate over this array is by using the forEach() function as follows:',
// );

// let nameListFE = ['John', 'Anne', 'Carly'];

// nameListFE.forEach(function (name) {
// 	console.log(name);
// });

// let userList = [
// 	{
// 		name: 'Liz',
// 		age: 20,
// 	},
// 	{
// 		name: 'John',
// 		age: 30,
// 	},
// 	{
// 		name: 'Sammy',
// 		age: 40,
// 	},
// ];

// console.log(
// 	'Logging the details of this list using a traditional for loop would look something like this:',
// );

// for (let i = 0; i < userList.length; i++) {
// 	console.log(userList[i].name + ' is ' + userList[i].age + ' years old.');
// }

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// //external function
// console.log('External Function');
// myArray.forEach(logToConsole);

// function logToConsole(item) {
// 	console.log(item);
// }

// //internal anonymous function
// console.log('internal anonymous function');
// myArray.forEach(function (item) {
// 	console.log(item);
// });

// //arrow function
// // {} is not necessary when there is only one line
// console.log('arrow function');
// myArray.forEach((item) => console.log(item));

// (function () {
// 	let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// 	let str = '';

// 	myArray.forEach(makeRainbowDivs);

// 	function makeRainbowDivs(item) {
// 		str += `<div> I am div ${item}</div>`;
// 	}

// 	document.getElementById('container').innerHTML = str;
// })();

// (function () {
// 	let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// 	let str = '';

// 	myArray.forEach(function (item) {
// 		str += `<div> I am div ${item}</div>`;
// 	});

// 	document.getElementById('container').innerHTML = str;
// })();

//FOR EACH USING ARROW FUNCTION
// (function () {
// 	let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// 	let str = '';

// 	myArray.forEach((item) => (str += `<div> I am div ${item}</div>`));

// 	document.getElementById('container').innerHTML = str;
// })();

//OBJECT KEYS

// let anne = {
// 	name: 'Anne',
// 	age: 38,
// 	children: [],
// };

// Object.keys(anne).forEach(function (property) {
// 	console.log(anne[property]);
// 	document.write(property + ': ' + anne[property] + '<br>');
// });

//FUNCTIONAL PROGRAMMING

// foodList = ['Pizza', 'Salad', 'Tuna'];

// let anne = {
// 	name: 'Anne Smith',
// 	age: 38,
// 	hasChildren: false,
// };

// function getPersonDescription(person) {
// 	let ageDescription = person.age + ' years old';
// 	let ChildrenDescription = person.hasChildren
// 		? 'has children'
// 		: 'has no children';

// 	return person.name + ', ' + ageDescription + ', ' + ChildrenDescription;
// }
// console.log(getPersonDescription(anne));

// var pug = {
// 	age: 4,
// 	hasPups: false,
// 	name: 'Fred',
// };

// function getAgeDescription() {
// 	return pug.age;
// }

// function getPupDescription(hasPups) {
// 	return hasPups ? 'has pups' : 'has no pups';
// }
// function getDogDescription(dog) {
// 	var ageDescription = getAgeDescription(dog.age);
// 	var pupDescription = getPupDescription(dog.hasPups);

// 	return dog.name + ', ' + ageDescription + ', ' + pupDescription;
// }

// console.log(getDogDescription(pug));

// let add = (a, b) => a + b;
// let multiply = (a, b) => a * b;

// console.log(add(2, multiply(4, 2)));

// function getFullName(person) {
// 	return person.firstName + ' ' + person.lastName;
// }

// let Character = {
// 	firstName: 'Homer',
// 	lastName: 'Simpson',
// };

// let fullName = getFullName(Character);

// console.log(fullName);

// let app = function () {
// 	let data = 'John';
// 	let somePrivateData = 'secrets';

// 	return {
// 		username: data,
// 	};
// };

// Global Variables and IIFE

// let pokemonRepository = (function () {
// 	let pokemonList = []; //empty array

// 	return {
// 		add: function (pokemon) {
// 			pokemonList.push(pokemon);
// 		},
// 		getAll: function () {
// 			return pokemonList;
// 		},
// 	};
// })();

// console.log(pokemonRepository.getAll()); // [] empty array
// pokemonRepository.add({ name: 'Pikachu' });
// console.log(pokemonRepository.getAll());

//OR

let pokemonRepository = (function () {
	let pokemonList = [];

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	return {
		add: add,
		getAll: getAll,
	};
})();
console.log(pokemonRepository.add({ name: 'Pikachu' }));
console.log(pokemonRepository.getAll());
