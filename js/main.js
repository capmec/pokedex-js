//TRAVERSING THE DOM

/**Selecting Nodes */

// let inputs = document.querySelectorAll('input');
// console.log(inputs.length); // e.g., 2

// inputs.forEach(function (input) {
// 	// do something with each input
// });

// inputs[0]; // Get the first input

// /* COMPLETE THE CODE BELOW BY FOLLOWING THE INSTRUCTIONS */

// // 1. Select and assign only the payments div:
// let payments = document.querySelector('.payments');

// // 2. Select and assign all divs with the class 'amount' INSIDE (!) the payments div
// let amountsOfPayments = document.querySelectorAll('.amountOfPayments');

// // 3. For each amount inside payments, log the element in the console.
// amountsOfPayments.forEach(function (amount) {
// 	console.log(amount);
// });

let mainTitle = document.querySelector('h1');
console.log(mainTitle.innerText);
mainTitle.innerText = 'THIS IS EPIC';
console.log(mainTitle.innerText);

// let container = document.querySelector('.container');
// container.innerHTML = '<button>Click me!</button>';
// console.log(container.innerHTML);

let container = document.querySelector('.container');
let button = document.createElement('button');
button.innerText = 'Click me!';
container.appendChild(button);

let elementToRemove = document.querySelector('p');
elementToRemove.parentElement.removeChild(elementToRemove);

// element = document.querySelector('div');
// console.log(element.tagName);

let element = document.querySelector('.container');

console.log(element.getAttribute('id'));
console.log(element.hasAttribute('value'));
element.setAttribute('id', 'new-id');

console.log(element.getAttribute('id'));

element.classList.contains('container');
element.classList.add('new-class');
element.classList.remove('new-class');
element.classList.toggle('new-class');

console.log(element.classList);
