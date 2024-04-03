document.addEventListener('DOMContentLoaded', () => {
	let e = document.getElementById('pokemonGrid'),
		t = (e) => e.charAt(0).toUpperCase() + e.slice(1),
		o = () => {
			fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
				.then((e) => e.json())
				.then((e) => {
					e.results.forEach((e) => {
						n(e);
					});
				})
				.catch((e) => console.error('Error fetching Pok\xe9mon data:', e))
				.finally(() => {
					document.getElementById('loadingMessage').style.display = 'none';
				});
		},
		n = (o) => {
			let n = document.createElement('div');
			n.classList.add('col-md-3', 'pokemon-card'),
				(n.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${s(o.url)}.png" alt="${
					o.name
				}" class="img-fluid">
            <p class="pokemon-name">${t(o.name)}</p>
        `),
				n.addEventListener('click', () => {
					i(o);
				}),
				e.appendChild(n);
		},
		s = (e) => e.split('/').slice(-2, -1)[0],
		i = (e) => {
			fetch(e.url)
				.then((e) => e.json())
				.then((o) => {
					let n = document.getElementById('pokemonDetails');
					(n.innerHTML = `
                    <img src="${o.sprites.front_default}" alt="${e.name}" class="modal-img">
                    <div class="infos-test">
                        <p><strong>Name:</strong> ${t(e.name)}</p>
                        <p><strong>Height:</strong> ${(o.height / 10).toFixed(1)}m</p>
                        <p><strong>Weight:</strong> ${(o.weight / 10).toFixed(1)}kg</p>
                        <p><strong>Types:</strong> ${o.types.map((e) => t(e.type.name)).join(', ')}</p>
                        <p><strong>Abilities:</strong> ${o.abilities.map((e) => t(e.ability.name)).join(', ')}</p>
                    </div>
                `),
						$('#pokemonModal .modal-title').text(t(e.name)),
						$('#pokemonModal').modal('show');
				})
				.catch((e) => console.error('Error fetching Pok\xe9mon details:', e));
		};
	o();
});
const pokemonRepo = (() => {
	let e = [],
		t = (t) => {
			'object' == typeof t && 'name' in t ? e.push(t) : console.error('Pokemon is not correct');
		},
		o = () => {
			(document.getElementById('loadingMessage').style.display = 'block'),
				fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
					.then((e) => e.json())
					.then((e) => {
						(document.getElementById('loadingMessage').style.display = 'none'),
							e.results.forEach((e) => {
								t({ name: e.name, detailsUrl: e.url });
							});
					})
					.catch((e) => console.error(e));
		},
		n = (e) => {
			fetch(e.detailsUrl)
				.then((e) => e.json())
				.then((t) => {
					(e.imageUrl = t.sprites.front_default),
						(e.height = t.height),
						(e.types = t.types),
						(e.weight = t.weight),
						(e.abilities = t.abilities),
						showPokemonDetails(e);
				})
				.catch((e) => console.error('Error fetching Pok\xe9mon details:', e));
		};
	return { add: t, getAll: () => e, loadList: o, loadDetails: n };
})();
