let pokemonRepository = (function () {
	let pokemonList = [
		{
			name: 'Machamp',
			height: 1.6,
			types: ['Fighting'],
		},
		{
			name: 'Bulbasaur',
			height: 0.7,
			types: ['grass', 'poison'],
		},
		{
			name: 'Vulpix',
			height: 0.6,
			types: ['fire'],
		},
		{
			name: 'Vapereon',
			height: 1.6,
			types: ['water'],
		},
	];

	return {
		add: function (pokemon) {
			pokemonList.push(pokemon);
		},
		getAll: function (pokemon) {
			return pokemonList;
		},
		displayPokemon: function () {
			pokemonList.forEach(function (pokemon) {
				if (pokemon.height > 1.0) {
					document.write(
						pokemon.name +
							' ' +
							' (height: ' +
							pokemon.height +
							') - Wow, that’s big!' +
							'<br>',
					);
				} else {
					document.write(
						pokemon.name + ' (height: ' + pokemon.height + ')' + '<br>',
					);
				}
			});
		},
	};
})();

pokemonRepository.add({ name: 'Pikachu' });
pokemonRepository.displayPokemon();
