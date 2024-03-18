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

	function addListItem(pokemon) {
		// create a variable inside the forEach's loop function block, then assign it the ul element you just added to your “index.html” file. (Hint: use document.querySelector). All the rest of the steps will take place inside your forEach loop block.

		let ul = document.querySelector('.pokemon-list');

		//Create an li element (e.g., let listItem = document.createElement('li')).

		let listItem = document.createElement('li');
		// listItem.innerHTML = pokemon.name;

		// Create a button element (e.g., let button = document.createElement('button')) and set its innerText to be the Pokémon's name (remember that forEach returns a Pokémon in each iteration).

		let button = document.createElement('button');
		button.innerText = pokemon.name;
		//Add a class to the button using the classList.add method (button.classList.add(...)).

		button.classList.add('button');

		//Now, append the button to the list item as its child.

		listItem.appendChild(button);

		//Finally, append the list item to the unordered list as its child.
		ul.appendChild(listItem);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
	};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu', height: 0.4, types: ['electric'] });
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});

window.addEventListener('keydown', function (event) {
	let survey_form = document.querySelector('#survey_form');
	let isFormHidden = survey_form.classList.contains('hidden');
	if (!isFormHidden && event.key === 'Escape') {
		survey_form.classList.add('hidden');
	}
});
