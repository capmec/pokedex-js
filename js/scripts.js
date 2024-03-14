let pokemonRepository = (function () {
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

	function add(pokemon) {
		if (
			typeof pokemon === 'object' &&
			'name' in pokemon &&
			'height' in pokemon &&
			'types' in pokemon
		) {
			pokemonList.push(pokemon);
		} else {
			console.log('Pokemon attribute is missing');
		}
	}

	function getAll() {
		return pokemonList;
	}

	function showDetails(pokemon) {
		console.log(object);
	}

	function addListItem(pokemon) {
		let ul = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button');

		// add an event listener to the button.
		button.addEventListener(button, pokemon);
		button.addEventListener('click', function () {
			showDetails(pokemon);
			console.log(pokemon);
		});

		function showDetails(pokemon) {
			console.log(pokemon.name);
		}

		listItem.appendChild(button);
		ul.appendChild(listItem);
	}

	return {
		add: add,
		getAll: getAll,
		showDetails: showDetails,
		addListItem: addListItem,
	};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu', height: 0.4, types: ['electric'] });
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});
