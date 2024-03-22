let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=15';

	//modal function to show the pokemon's name and height

	let modalContainer = document.querySelector('#modal-container');

	function showModal(pokemon) {
		//clear all existing modal content
		modalContainer.innerHTML = '';

		//create modal element
		let modal = document.createElement('div');
		modal.classList.add('modal');

		//add new content to the modal

		//create close button
		let closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		closeButtonElement.innerText = 'Close';
		closeButtonElement.addEventListener('click', hideModal);

		//create title element (pokemon name)
		let titleElement = $('<h1>' + item.name + '</h1>');
		let imageElement = $('<img class="modal-img" style="width: 50%">').attr(
			'src',
			item.imageUrlFront,
		);

		let heightElement = $('<p>' + 'Height: ' + item.height + '</p>');

		let typesElement = $('<p>' + 'Types: ' + item.types.join(', ') + '</p>');

		//append modal content to modal
		modal.appendChild(closeButtonElement);
		modal.appendChild(titleElement);
		modal.appendChild(heightElement);
		modal.appendChild(typesElement);
		modal.appendChild(imageElement);
		modalContainer.appendChild(modal);

		modalContainer.classList.add('is-visible');
	}

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function getAll() {
		return pokemonList;
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
				json.results.forEach(function (pokemon) {
					let pokemonDetails = {
						name: pokemon.name,
						detailsUrl: pokemon.url,
					};
					add(pokemonDetails);
				});
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	//function to load the details of a specific pokemon

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

	function showDetails(pokemon) {
		loadDetails(pokemon).then(function () {
			showModal(pokemon);
		});
	}

	function hideModal() {
		modalContainer.classList.remove('is-visible');
	}

	// document.querySelector('#show-modal').addEventListener('click', () => {
	// 	//show modal with the item from the pokemon list
	// 	showModal(loadDetails(pokemon));
	// });

	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
			hideModal();
		}
	});

	modalContainer.addEventListener('click', (e) => {
		let target = e.target;
		if (target === modalContainer) {
			hideModal();
		}
	});

	function addListItem(pokemon) {
		let ul = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button');
		listItem.appendChild(button);
		ul.appendChild(listItem);

		//when the button is clicked, showModal() is called
		document.querySelector('.button').addEventListener('click', function () {
			showModal(pokemon.name, 'Height: ' + pokemon.height);
		});
	}

	function showLoading() {
		document.getElementById('loadingMessage').style.display = 'block';
	}

	function hideLoading() {
		document.getElementById('loadingMessage').style.display = 'none';
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		showModal: showModal,
	};
})();

//hide modal function (after close button is clicked or when the user clicks outside the modal)

pokemonRepository.add({
	name: 'Pikachu',
	detailsUrl: '',
	height: 0.3,
	types: ['electric'],
});
// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
