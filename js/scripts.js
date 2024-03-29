let pokemonRepo = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	// Function to add a Pokemon to the repository
	function add(pokemon) {
		if (typeof pokemon === 'object' && 'name' in pokemon) {
			pokemonList.push(pokemon);
		} else {
			console.error('pokemon is not correct');
		}
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function showLoading() {
		document.getElementById('loadingMessage').style.display = 'block';
	}

	function hideLoading() {
		document.getElementById('loadingMessage').style.display = 'none';
	}

	// Function to get all Pokemon from the repository
	function getAll() {
		return pokemonList;
	}

	// Function to add a list item for a Pokemon

	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.cards');

		let listItem = document.createElement('div');

		let card = document.createElement('cards-inner');
		card.innerText = capitalizeFirstLetter(pokemon.name);
		card.classList.add('cards-inner');

		card.setAttribute('data-target', '#exampleModal');
		card.setAttribute('data-toggle', 'modal');

		listItem.appendChild(card);
		pokemonList.appendChild(listItem);
		pokemonList.appendChild(listItem);

		addEventListenertoButton(card, pokemon);
	}

	function addEventListenertoButton(card, pokemon) {
		card.addEventListener('click', function () {
			showDetails(pokemon);
		});
	}

	// Function to load the list of Pokemon from the API

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

	// Function to load details of a specific Pokemon
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (details) {
				item.imageUrl = details.sprites.front_default;
				item.height = details.height;
				item.types = details.types;
				item.weight = details.weight;
				item.abilities = details.abilities;
			})
			.catch(function (e) {
				console.error(e);
			});
	}

	//  modal code

	let modal = document.querySelector('.modal');

	function showDetails(item) {
		pokemonRepo.loadDetails(item).then(function () {
			showModal(item);
		});
	}

	function showModal(pokemon) {
		let modalBody = document.querySelector('.modal-body');
		let modalHeader = document.querySelector('.modal-header');
		modalBody.innerHTML = '';

		let modalTitle = document.querySelector('.modal-title');
		modalTitle.innerText = capitalizeFirstLetter(pokemon.name);
		let closeButtonElement = document.querySelector('.close');

		let imageElement = document.createElement('img');
		imageElement.classList.add('modal-img');
		imageElement.src = pokemon.imageUrl;
		imageElement.alt = 'image of' + pokemon.name;

		let typesElement = document.createElement('p');
		let types = [pokemon.types[0].type.name];
		for (let i = 1; i < pokemon.types.length; i++) {
			types.push(', ' + pokemon.types[i].type.name);
		}
		typesElement.innerHTML = '<strong>Types:</strong> ' + types.join('');

		let heightElement = document.createElement('p');
		heightElement.innerHTML = '<strong>Height:</strong> ' + pokemon.height + 'm';

		let weightElement = document.createElement('p');
		weightElement.innerHTML = '<strong>Weight:</strong> ' + pokemon.weight;

		let abilities = document.createElement('p');
		let abilitiesList = [pokemon.abilities[0].ability.name];
		for (let i = 1; i < pokemon.abilities.length; i++) {
			abilitiesList.push(', ' + pokemon.abilities[i].ability.name);
		}
		abilities.innerHTML = '<strong>Abilities:</strong> ' + abilitiesList.join('');

		modalHeader.appendChild(modalTitle);
		modalHeader.appendChild(closeButtonElement);
		modalBody.appendChild(imageElement);
		modalBody.appendChild(typesElement);
		modalBody.appendChild(heightElement);
		modalBody.appendChild(weightElement);
		modalBody.appendChild(abilities);
	}

	function hideModal() {
		modal.classList.remove('is-visible');
	}

	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
			hideModal();
		}
	});

	modal.addEventListener('click', (e) => {
		let target = e.target;
		if (target === modal) {
			hideModal();
		}
	});

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
	};
})();

// Load the list of Pokemon and add list items
pokemonRepo.loadList().then(function () {
	pokemonRepo.getAll().forEach(function (pokemon) {
		pokemonRepo.addListItem(pokemon);
	});
});
