const pokemonRepo = (function () {
	const pokemonGrid = document.getElementById('pokemonGrid');
	const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

	const loadPokemonList = () => {
		document.getElementById('loadingMessage').style.display = 'block';
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				document.getElementById('loadingMessage').style.display = 'none';
				data.results.forEach((pokemon) => {
					const newPokemon = { name: pokemon.name, detailsUrl: pokemon.url };
					pokeballButton(newPokemon);
				});
			})
			.catch((error) => console.error(error));
	};

	const loadPokemonDetails = (pokemon) => {
		fetch(pokemon.detailsUrl)
			.then((response) => response.json())
			.then((data) => {
				pokemon.imageUrl = data.sprites.front_default;
				pokemon.height = data.height;
				pokemon.types = data.types;
				pokemon.weight = data.weight;
				pokemon.abilities = data.abilities;
				showPokemonDetails(pokemon);
			})
			.catch((error) => console.error('Error fetching Pokémon details:', error));
	};

	const pokeballButton = (pokemon) => {
		const card = document.createElement('div');
		card.classList.add('col-md-3', 'pokemon-card');
		card.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
							pokemon.detailsUrl,
						)}.png" alt="${pokemon.name}" class="img-fluid">
            <p class="pokemon-name">${capitalizeFirstLetter(pokemon.name)}</p>
        `;
		card.addEventListener('click', () => {
			loadPokemonDetails(pokemon);
		});
		pokemonGrid.appendChild(card);
	};

	const getPokemonId = (url) => url.split('/').slice(-2, -1)[0];

	const showPokemonDetails = (pokemon) => {
		const pokemonDetails = document.getElementById('pokemonDetails');
		pokemonDetails.innerHTML = `
            <img src="${pokemon.imageUrl}" alt="${pokemon.name}" class="modal-img">
            <div class="infos-test">
                <p><strong>Name:</strong> ${capitalizeFirstLetter(pokemon.name)}</p>
                <p><strong>Height:</strong> ${(pokemon.height / 10).toFixed(1)}m</p>
                <p><strong>Weight:</strong> ${(pokemon.weight / 10).toFixed(1)}kg</p>
                <p><strong>Types:</strong> ${pokemon.types
									.map((type) => capitalizeFirstLetter(type.type.name))
									.join(', ')}</p>
                <p><strong>Abilities:</strong> ${pokemon.abilities
									.map((ability) => capitalizeFirstLetter(ability.ability.name))
									.join(', ')}</p>
            </div>
        `;
		$('#pokemonModal .modal-title').text(capitalizeFirstLetter(pokemon.name));
		$('#pokemonModal').modal('show');
	};

	loadPokemonList();
})();
