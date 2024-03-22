// //Synchronous vs. Asynchronous Code

// function runThisLater() {
// 	console.log('Burgers');
// }

// console.log('Pizza');
// setTimeout(runThisLater, 1000);
// console.log('Salad');

// let count = 1;
// function increaseCount() {
// 	count = count + 1;
// }
// setTimeout(function () {
// 	console.log('first call', count);
// 	increaseCount();
// }, 200);
// setTimeout(function () {
// 	console.log('second call', count);
// 	increaseCount();
// }, 100);
// setTimeout(function () {
// 	console.log('third call', count);
// 	increaseCount();
// }, 500);

// //PROMISES

// let examplePromise = new Promise(function (resolve, reject) {
// 	let sum;
// 	setTimeout(function () {
// 		sum = 5 + 6;
// 		if (sum > 10) {
// 			resolve(sum);
// 		} else {
// 			reject('The promise has been rejected');
// 		}
// 	}, 2000);
// });
// console.log('some piece of code');
// examplePromise
// 	.then(function (result) {
// 		console.log(result);
// 	})
// 	.catch(function (error) {
// 		console.error(error);
// 	});
// console.log('another piece of code');

// function examplePromise() {
// 	let promiseToReturn = new Promise(function (resolve, reject) {
// 		let sum;
// 		setTimeout(function () {
// 			sum = 5 + 6;
// 			if (sum > 10) {
// 				resolve(sum);
// 			} else {
// 				reject('The promise has been rejected');
// 			}
// 		}, 2000);
// 	});
// 	return promiseToReturn;
// }

// console.log('some piece of code');
// examplePromise()
// 	.then(function (result) {
// 		console.log(result);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});
// console.log('another piece of code');

// //Ajax with Fetch

// fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
// 	.then(function (response) {
// 		return response.json(); // This returns a promise!
// 	})
// 	.then(function (pokemonList) {
// 		console.log(pokemonList); // The actual JSON response
// 	})
// 	.catch(function () {
// 		// Error
// 	});

(function () {
	let form = document.querySelector('#register-form');
	let emailInput = document.querySelector('#email');
	let passwordInput = document.querySelector('#password');

	function showErrorMessage(input, message) {
		let container = input.parentElement; // .input-wrapper
		let error = container.querySelector('.error-message');
		if (error) {
			container.removeChild(error);
		}
		// Now add the error if the message isn’t empty
		if (message) {
			let error = document.createElement('div');
			error.classList.add('error-message');
			error.innerText = message;
			container.appendChild(error);
		}
	}

	function validateEmail() {
		let value = emailInput.value;
		if (!value) {
			showErrorMessage(emailInput, 'Email is a required field.');
			return false;
		}
		if (value.indexOf('@') === -1) {
			showErrorMessage(emailInput, 'You must enter a valid email address.');
			return false;
		}
		if (value.indexOf('.') === -1) {
			showErrorMessage(emailInput, 'You must enter a valid email address.');
			return false;
		}

		let hasAtSign = value.indexOf('@') > -1;
		let hasDot = value.indexOf('.') > -1;
		return value && hasAtSign && hasDot;
	}

	function validatePassword() {
		let value = passwordInput.value;
		return value && value.length >= 8;
	}

	function validateForm() {
		return validateEmail() && validatePassword();
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault(); // Do not submit to the server
		if (validateForm()) {
			alert('Success!');
		}
	});

	// THE RETURN STATEMENT HERE
})();
