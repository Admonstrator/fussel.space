'use strict'

let highlight = (hash) => {
	for(let node of Array.from(document.querySelectorAll('nav a'))) {
		node.classList.remove('active')
	}

	let nav = document.querySelector(`nav a[href$="#${hash}"]`)

	if(nav) {
		document.querySelector(`nav a[href$="#${hash}"]`).classList.add('active')
	}
}

let render = (hash, box) => new Promise((resolve, reject) => {
	hash = (/^[a-z\/]+$/.test(hash)) ? hash : 'home'
	let link = document.createElement('link')

	link.rel = 'import'
	link.href = `/pages/${hash}.html`

	box.innerHTML = ''

	link.onerror = (e) => {
		reject(hash)
		location.hash = '#error'
	}

	link.onload = () => {
		let nodes = link.import.cloneNode(true).querySelector('body')

		while(nodes.hasChildNodes()) {
			box.appendChild(nodes.removeChild(nodes.firstChild))
		}

		document.querySelector('head').removeChild(link)

		resolve(hash)
	}

	document.head.appendChild(link)
})

let nav = document.querySelector('body > aside > nav')
let content = document.querySelector('body > section > article')

render('navigation', nav).then(highlight)
render(location.hash.substring(1), content).then(highlight)
onhashchange = () => render(location.hash.substring(1), content).then(highlight)
