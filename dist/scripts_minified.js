const pokemonRepo = (function () {
	let e = document.getElementById('pokemonGrid'),
		t = (e) => e.charAt(0).toUpperCase() + e.slice(1),
		i = (e) => {
			fetch(e.detailsUrl)
				.then((e) => e.json())
				.then((t) => {
					(e.imageUrl = t.sprites.front_default),
						(e.height = t.height),
						(e.types = t.types),
						(e.weight = t.weight),
						(e.abilities = t.abilities),
						o(e);
				})
				.catch((e) => console.error('Error fetching Pok\xe9mon details:', e));
		},
		s = (s) => {
			let o = document.createElement('div');
			o.classList.add('col-md-3', 'pokemon-card'),
				(o.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n(
							s.detailsUrl,
						)}.png" alt="${s.name}" class="img-fluid">
            <p class="pokemon-name">${t(s.name)}</p>
        `),
				o.addEventListener('click', () => {
					i(s);
				}),
				e.appendChild(o);
		},
		n = (e) => e.split('/').slice(-2, -1)[0],
		o = (e) => {
			let i = document.getElementById('pokemonDetails');
			(i.innerHTML = `
            <img src="${e.imageUrl}" alt="${e.name}" class="modal-img">
            <div class="infos-test">
                <p><strong>Name:</strong> ${t(e.name)}</p>
                <p><strong>Height:</strong> ${(e.height / 10).toFixed(1)}m</p>
                <p><strong>Weight:</strong> ${(e.weight / 10).toFixed(1)}kg</p>
                <p><strong>Types:</strong> ${e.types.map((e) => t(e.type.name)).join(', ')}</p>
                <p><strong>Abilities:</strong> ${e.abilities.map((e) => t(e.ability.name)).join(', ')}</p>
            </div>
        `),
				$('#pokemonModal .modal-title').text(t(e.name)),
				$('#pokemonModal').modal('show');
		};
	(document.getElementById('loadingMessage').style.display = 'block'),
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
			.then((e) => e.json())
			.then((e) => {
				(document.getElementById('loadingMessage').style.display = 'none'),
					e.results.forEach((e) => {
						let t = { name: e.name, detailsUrl: e.url };
						s(t);
					});
			})
			.catch((e) => console.error(e));
})();
