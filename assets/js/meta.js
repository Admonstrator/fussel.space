'use strict'

const meta = [
	{caffeine: 25, id: [25, 40], hash: 'leet', name: '1337Mate'},
	{caffeine: 20, id: [15], hash: 'charitea', name: 'ChariTea Mate'},
	{caffeine: 20, id: [1], hash: 'club', name: 'Club Mate'},
	{caffeine: 18, id: [24], hash: 'flora', name: 'Flora Power'},
	{caffeine: 0, id: [], hash: 'kano', name: 'kano'},
	{caffeine: 20, id: [31], hash: 'kolle', name: 'kolle-mate'},
	{caffeine: 22, id: [32], hash: 'maetchen', name: 'berliner mätchen'},
	{caffeine: 32, id: [], hash: 'lux', name: 'Lux Mate'},
	{caffeine: 6.2, id: [17], hash: 'makava', name: 'MAKAvA'},
	{caffeine: 6.5, id: [33, 34, 35, 36], hash: 'maki', name: 'Maki Mate'},
	{caffeine: 0, id: [], hash: 'mari', name: 'Mari'},
	{caffeine: 24, id: [], hash: 'hoch-2', name: 'Mate-Hoch-2'},
	{caffeine: 30, id: [37], hash: 'matemate', name: 'MATE MATE'},
	{caffeine: 21.5, id: [14], hash: 'maya', name: 'Maya Mate'},
	{caffeine: '∞', id: [], hash: 'metamate', name: 'Meta Mate'},
	{caffeine: 20, id: [12], hash: 'miomio', name: 'MioMioMate'},
	{caffeine: 0, id: [], hash: 'mixery', name: 'Mixery Mate'},
	{caffeine: 32, id: [28], hash: 'rio', name: 'Rio Mate'},
	{caffeine: 25, id: [47], hash: 'soli', name: 'SOLIMATE'},
	{caffeine: 22, id: [18, 19, 20, 21, 22, 23], hash: 'top', name: 'Top Mate'},
	{caffeine: '∞', id: [8], hash: 'tschunk', name: 'Tschunk'},
	{caffeine: 21, id: [], hash: 'ulti', name: 'Ultichá Mate'},
	{caffeine: 0, id: [], hash: 'voelkel', name: 'Voelkel'}
]

const append_meta = hash => {
	const mate = meta.filter(mate => hash == mate.hash)[0]
	const container = document.querySelector('body > section > article')

	if (mate.caffeine) {
		container.innerHTML += `<p><strong>Koffein:</strong> ${mate.caffeine}mg/100ml</p>`
	}

	if (mate.id.length) {
		container.innerHTML += `<p>${mate.name} auf <a href="https://matemonkey.com/map/dealer/?products=${mate.id.join(',')}">MateMonkey</a></p>`
	}
}

const hash = /(\w+)\.html/.exec(window.location.pathname)
if (hash.length >= 2) {
	append_meta(hash[1])
}
