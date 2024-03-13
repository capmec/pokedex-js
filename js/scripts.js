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
		document.write(pokemon.name + ' (height: ' + pokemon.height + ')' + '<br>');
	}
});

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
