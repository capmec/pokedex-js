let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

	let modalContainer = document.querySelector('#modal-container');

	function showDetails(pokemon) {
		loadDetails(pokemon).then(function () {
			console.log(pokemon);
			showModal(pokemon);
		});
	}

	function showModal(pokemon) {
		// Clear all existing modal content
		modalContainer.innerHTML = '';

		let modal = document.createElement('div');
		modal.classList.add('modal');

		// Add the new modal content
		let closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		closeButtonElement.innerText = 'Close';
		closeButtonElement.addEventListener('click', hideModal);

		let nameElement = document.createElement('h1');
		nameElement.innerText = pokemon.name;

		let heightElement = document.createElement('p');
		heightElement.innerText = `Height: ${pokemon.height} m`;

		let imageElement = document.createElement('img');
		imageElement.src = pokemon.imageUrl;
		imageElement.alt = pokemon.name;

		// Append the modal content to the modal
		modal.appendChild(closeButtonElement);
		modal.appendChild(nameElement);
		modal.appendChild(heightElement);
		modal.appendChild(imageElement);

		modalContainer.appendChild(modal);

		//display the modal
		modalContainer.classList.add('is-visible');
	}

	function hideModal() {
		modalContainer.classList.remove('is-visible');
	}

	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
			hideModal();
		}
	});
	// Close modal if clicked outside of it
	modalContainer.addEventListener('click', (e) => {
		let target = e.target;
		if (target === modalContainer) {
			hideModal();
		}
	});

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
	}

	function addListItem(pokemon) {
		let ul = document.querySelector('.cards');
		let listItem = document.createElement('div');
		let card = document.createElement('cards-inner');
		card.innerText = pokemon.name;
		card.classList.add('cards-inner');
		listItem.appendChild(card);
		ul.appendChild(listItem);
		card.addEventListener('click', function (event) {
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
	function loadDetails(pokemon) {
		showLoading();
		let url = pokemon.detailsUrl;
		return fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (details) {
				hideLoading();
				// Now we add the details to the pokemon
				pokemon.imageUrl = details.sprites.front_default;
				pokemon.height = details.height;
				pokemon.types = details.types;
			})
			.catch(function (e) {
				console.error(e);
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
