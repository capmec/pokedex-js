let pokemonRepository = function () {
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
	];

	//Function Parameters & Arguments

	let pokemonList2 = [
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
};

//create a for loop that iterates over each item in pokemonList array
//write the name and height of each pokemon to the document
//if the pokemon is larger or equal to 1.0 = Wow, that’s big!

function printArraysDetails(list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i].height >= 1.0) {
			document.write(
				list[i].name + ' (height: ' + list[i].height + ') - Wow, that’s big!',
			);
			document.write('<br>');
		} else {
			document.write(list[i].name + ' (height: ' + list[i].height + ')');
			document.write('<br>');
		}
	}
}

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

printArraysDetails(pokemonList);
printArraysDetails(pokemonList2);
