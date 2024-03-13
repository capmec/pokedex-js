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

	return {
		add: function (pokemon) {
			pokemonList.push(pokemon);
		},
		getAll: function () {
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

pokemonRepository.add({ name: 'Pikachu', height: 0.4, types: ['electric'] });
pokemonRepository.displayPokemon();

// for (let i = 0; i < pokemonList.length; i++) {
// 	if (pokemonList[i].height >= 1.0) {
// 		document.write(
// 			pokemonList[i].name +
// 				' (height: ' +
// 				pokemonList[i].height +
// 				') - Wow, that’s big!',
// 		);
// 	} else {
// 		document.write(
// 			pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')',
// 		);
// 		document.write('<br>');
// 	}
// }
// printArraysDetails(pokemonList);
// printArraysDetails(pokemonList2);

// function printArraysDetails(list) {
// 	for (let i = 0; i < list.length; i++) {
// 		if (list[i].height >= 1.0) {
// 			document.write(
// 				list[i].name + ' (height: ' + list[i].height + ') - Wow, that’s big!',
// 			);
// 			document.write('<br>');
// 		} else {
// 			document.write(list[i].name + ' (height: ' + list[i].height + ')');
// 			document.write('<br>');
// 		}
// 	}
// }
