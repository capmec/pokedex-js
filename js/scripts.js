document.addEventListener('DOMContentLoaded', function () {
	const pokemonGrid = document.getElementById('pokemonGrid');

	// Function to capitalize first letter of a string
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	// Function to show Pokémon details in modal
	function showPokemonDetails(pokemon) {
		fetch(pokemon.url)
			.then((response) => response.json())
			.then((data) => {
				const pokemonDetails = document.getElementById('pokemonDetails');
				pokemonDetails.innerHTML = `
                    <img src="${data.sprites.front_default}" alt="${pokemon.name}" class="img-fluid">
    <p><strong>Name:</strong> ${capitalizeFirstLetter(pokemon.name)}</p>
    <p><strong>Height:</strong> ${(data.height / 10).toFixed(1)}m</p>
    <p><strong>Weight:</strong> ${(data.weight / 10).toFixed(1)}kg</p>
    <p><strong>Types:</strong> ${data.types.map((type) => capitalizeFirstLetter(type.type.name)).join(', ')}</p>
    <p><strong>Abilities:</strong> ${data.abilities
			.map((ability) => capitalizeFirstLetter(ability.ability.name))
			.join(', ')}</p>
`;

				$('#pokemonModal .modal-title').text(capitalizeFirstLetter(pokemon.name)); // Set modal title
				$('#pokemonModal').modal('show'); // Show the modal using jQuery
			})
			.catch((error) => console.error('Error fetching Pokémon details:', error));
	}

	// Function to create Pokémon card
	function createPokemonCard(pokemon) {
		let card = document.createElement('div');
		card.classList.add('col-md-3', 'pokemon-card');
		card.innerHTML = `
            <img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
							pokemon.url,
						)}.png" alt="${pokemon.name}" class="img-fluid">
            <p class="pokemon-name">${capitalizeFirstLetter(pokemon.name)}</p>
        `;
		card.addEventListener('click', () => {
			showPokemonDetails(pokemon);
		});
		pokemonGrid.appendChild(card);
	}

	// Function to get Pokémon ID from URL
	function getPokemonId(url) {
		const id = url.split('/').slice(-2, -1)[0];
		return id;
	}

	// Fetch Pokémon data from the API and create Pokémon cards
	fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
		.then((response) => response.json())
		.then((data) => {
			const pokemons = data.results;
			pokemons.forEach((pokemon) => {
				createPokemonCard(pokemon);
			});
		})
		.catch((error) => console.error('Error fetching Pokémon data:', error));
});

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
		let pokemonListContainer = document.querySelector('.cards');
		if (!pokemonListContainer) return; // Exit if the container doesn't exist

		let listItem = document.createElement('div');
		let card = document.createElement('cards-inner');
		card.innerText = capitalizeFirstLetter(pokemon.name);
		card.classList.add('cards-inner');
		card.setAttribute('data-target', '#exampleModal');
		card.setAttribute('data-toggle', 'modal');
		listItem.appendChild(card);
		pokemonListContainer.appendChild(listItem);

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
				return response.json();
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
				console.error(err);
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
	function showDetails(item) {
		loadDetails(item).then(function () {
			showModal(item);
		});
	}

	function showModal(pokemon) {
		showPokemonDetails(pokemon);
	}

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
