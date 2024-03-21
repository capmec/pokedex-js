let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=15';

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	function addListItem(pokemon) {
		let ul = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button');
		listItem.appendChild(button);
		ul.appendChild(listItem);
		button.addEventListener('click', function (event) {
			showDetails(pokemon);
		});
	}

	function showLoading() {
		document.getElementById('loadingMessage').style.display = 'block';
	}

	function hideLoading() {
		document.getElementById('loadingMessage').style.display = 'none';
	}

	//can loadList() be an async function?
	function loadList() {
		showLoading();
		return fetch(apiUrl)
			.then(function (response) {
				return response.json(); // This returns a promise!
			})
			.then(function (json) {
				hideLoading();
				json.results.forEach(function (item) {
					let pokemon = {
						name: item.name,
						detailsUrl: item.url,
					};
					add(pokemon);
				});
			})
			.catch(function (err) {
				console.log(err);
			});
	}
	function loadDetails(item) {
		showLoading();
		let url = item.detailsUrl;
		return fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (details) {
				hideLoading();
				// Now we add the details to the item
				item.imageUrl = details.sprites.front_default;
				item.height = details.height;
				item.types = details.types;
			})
			.catch(function (e) {
				console.error(e);
			});
	}

	function showDetails(pokemon) {
		loadDetails(pokemon).then(function () {
			console.log(pokemon);
		});
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
	};
})();

// pokemonRepository.add({
// 	name: 'Pikachu',
// 	detailsUrl: '',
// 	height: 0.3,
// 	types: ['electric'],
// });
// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
