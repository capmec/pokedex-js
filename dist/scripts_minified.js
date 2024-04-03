document.addEventListener('DOMContentLoaded', function () {
	let e = document.getElementById('pokemonGrid');
	function t(e) {
		return e.charAt(0).toUpperCase() + e.slice(1);
	}
	fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
		.then((e) => e.json())
		.then((n) => {
			n.results.forEach((n) => {
				var o, i;
				let r;
				(o = n),
					(r = document.createElement('div')).classList.add('col-md-3', 'pokemon-card'),
					(r.innerHTML = `
            <img  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							(i = o.url).split('/').slice(-2, -1)[0]
						}.png" alt="${o.name}" class="img-fluid">
            <p class="pokemon-name">${t(o.name)}</p>
        `),
					r.addEventListener('click', () => {
						!(function e(n) {
							fetch(n.url)
								.then((e) => e.json())
								.then((e) => {
									(document.getElementById('pokemonDetails').innerHTML = `

                    <img src="${e.sprites.front_default}" alt="${n.name}" class="modal-img">

					<div class="infos-test">
    <p><strong>Name:</strong> ${t(n.name)}</p>
    <p><strong>Height:</strong> ${(e.height / 10).toFixed(1)}m</p>
    <p><strong>Weight:</strong> ${(e.weight / 10).toFixed(1)}kg</p>
    <p><strong>Types:</strong> ${e.types.map((e) => t(e.type.name)).join(', ')}</p>
    <p><strong>Abilities:</strong> ${e.abilities.map((e) => t(e.ability.name)).join(', ')}</p>
	</div>

`),
										$('#pokemonModal .modal-title').text(t(n.name)),
										$('#pokemonModal').modal('show');
								})
								.catch((e) => console.error('Error fetching Pok\xe9mon details:', e));
						})(o);
					}),
					e.appendChild(r);
			});
		})
		.catch((e) => console.error('Error fetching Pok\xe9mon data:', e));
});
let pokemonRepo = (function () {
	let e = [];
	function t(t) {
		'object' == typeof t && 'name' in t ? e.push(t) : console.error('pokemon is not correct');
	}
	function n() {
		return e;
	}
	function o(e) {
		return fetch(e.detailsUrl)
			.then(function (e) {
				return e.json();
			})
			.then(function (t) {
				(e.imageUrl = t.sprites.front_default),
					(e.height = t.height),
					(e.types = t.types),
					(e.weight = t.weight),
					(e.abilities = t.abilities);
			})
			.catch(function (e) {
				console.error(e);
			});
	}
	return {
		add: t,
		getAll: n,
		addListItem: function e(t) {
			var n;
			let i = document.querySelector('.cards');
			if (!i) return;
			let r = document.createElement('div'),
				a = document.createElement('cards-inner');
			(a.innerText = (n = t.name).charAt(0).toUpperCase() + n.slice(1)),
				a.classList.add('cards-inner'),
				a.setAttribute('data-target', '#exampleModal'),
				a.setAttribute('data-toggle', 'modal'),
				r.appendChild(a),
				i.appendChild(r),
				(function e(t, n) {
					t.addEventListener('click', function () {
						(function e(t) {
							o(t).then(function () {
								var e;
								showPokemonDetails((e = t));
							});
						})(n);
					});
				})(a, t);
		},
		loadList: function e() {
			return (
				(document.getElementById('loadingMessage').style.display = 'block'),
				fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
					.then(function (e) {
						return e.json();
					})
					.then(function (e) {
						(document.getElementById('loadingMessage').style.display = 'none'),
							e.results.forEach(function (e) {
								t({ name: e.name, detailsUrl: e.url });
							});
					})
					.catch(function (e) {
						console.error(e);
					})
			);
		},
		loadDetails: o,
	};
})();
pokemonRepo.loadList().then(function () {
	pokemonRepo.getAll().forEach(function (e) {
		pokemonRepo.addListItem(e);
	});
});
