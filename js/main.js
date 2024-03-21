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

function examplePromise() {
	let promiseToReturn = new Promise(function (resolve, reject) {
		let sum;
		setTimeout(function () {
			sum = 5 + 6;
			if (sum > 10) {
				resolve(sum);
			} else {
				reject('The promise has been rejected');
			}
		}, 2000);
	});
	return promiseToReturn;
}

console.log('some piece of code');
examplePromise()
	.then(function (result) {
		console.log(result);
	})
	.catch(function (error) {
		console.log(error);
	});
console.log('another piece of code');
