document.addEventListener('DOMContentLoaded', () => {
	const pokemonGrid = document.getElementById('pokemonGrid');

	const capitalizeName = (string) => string.charAt(0).toUpperCase() + string.slice(1);

	const fetchPokemonData = () => {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
			.then((response) => response.json())
			.then((data) => {
				data.results.forEach((pokemon) => {
					createPokeball(pokemon);
				});
			})
			.catch((error) => console.error('Error fetching Pokémon data:', error))
			.finally(() => {
				document.getElementById('loadingMessage').style.display = 'none';
			});
	};

	const createPokeball = (pokemon) => {
		const pokeball = document.createElement('div');
		pokeball.classList.add('col-md-3', 'pokemon-card');
		pokeball.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
							pokemon.url,
						)}.png" alt="${pokemon.name}" class="img-fluid">
            <p class="pokemon-name">${capitalizeName(pokemon.name)}</p>
        `;
		pokeball.addEventListener('click', () => {
			showPokemonDetails(pokemon);
		});
		pokemonGrid.appendChild(pokeball);
	};

	const getPokemonId = (url) => url.split('/').slice(-2, -1)[0];

	const showPokemonDetails = (pokemon) => {
		fetch(pokemon.url)
			.then((response) => response.json())
			.then((data) => {
				const pokemonDetails = document.getElementById('pokemonDetails');
				pokemonDetails.innerHTML = `
                    <img src="${data.sprites.front_default}" alt="${pokemon.name}" class="modal-img">
                    <div class="infos-test">
                        <p><strong>Name:</strong> ${capitalizeName(pokemon.name)}</p>
                        <p><strong>Height:</strong> ${(data.height / 10).toFixed(1)}m</p>
                        <p><strong>Weight:</strong> ${(data.weight / 10).toFixed(1)}kg</p>
                        <p><strong>Types:</strong> ${data.types
													.map((type) => capitalizeName(type.type.name))
													.join(', ')}</p>
                        <p><strong>Abilities:</strong> ${data.abilities
													.map((ability) => capitalizeName(ability.ability.name))
													.join(', ')}</p>
                    </div>
                `;
				$('#pokemonModal .modal-title').text(capitalizeName(pokemon.name));
				$('#pokemonModal').modal('show');
			})
			.catch((error) => console.error('Error fetching Pokémon details:', error));
	};

	fetchPokemonData();
});

const pokemonRepo = (() => {
	const pokemonList = [];

	const addPokemon = (pokemon) => {
		if (typeof pokemon === 'object' && 'name' in pokemon) {
			pokemonList.push(pokemon);
		} else {
			console.error('Pokemon is not correct');
		}
	};

	const getAllPokemon = () => pokemonList;

	// const addListItem = (pokemon) => {
	// 	const pokeballsGrid = document.querySelector('.pokemonGrid');
	// 	if (!pokeballsGrid) return;

	// 	const pokeball = document.createElement('div');
	// 	const pokeballInner = document.createElement('div');
	// 	pokeballInner.innerText = capitalizeName(pokemon.name);
	// 	pokeballInner.classList.add('cards-inner');
	// 	pokeballInner.setAttribute('data-target', '#exampleModal');
	// 	pokeballInner.setAttribute('data-toggle', 'modal');
	// 	pokeball.appendChild(cardInner);
	// 	pokeballsContainer.appendChild(card);

	// 	pokeball.addEventListener('click', () => {
	// 		loadPokemonDetails(pokemon);
	// 	});
	// };

	const loadPokemonList = () => {
		document.getElementById('loadingMessage').style.display = 'block';
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
			.then((response) => response.json())
			.then((data) => {
				document.getElementById('loadingMessage').style.display = 'none';
				data.results.forEach((pokemon) => {
					addPokemon({ name: pokemon.name, detailsUrl: pokemon.url });
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

	return {
		add: addPokemon,
		getAll: getAllPokemon,
		// addListItem: addListItem,
		loadList: loadPokemonList,
		loadDetails: loadPokemonDetails,
	};
})();
