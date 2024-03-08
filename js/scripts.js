let pokemonList = [
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
		height: 1.0,
		types: ['water'],
	},
];

//create a for loop that iterates over each item in pokemonList array
//write the name and height of each pokemon to the document
//if the pokemon is larger or equal to 1.0 = Wow, that’s big!

for (let i = 0; i < pokemonList.length; i++) {
	if (pokemonList[i].height >= 1.0) {
		document.write(
			pokemonList[i].name +
				' (height: ' +
				pokemonList[i].height +
				') - Wow, that’s big!',
		);
	} else {
		document.write(
			pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')',
		);
		document.write('<br>');
	}
}
