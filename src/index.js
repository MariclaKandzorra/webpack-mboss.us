

import printMe from './print.js';

function component() {
	const btn = document.createElement('button');
	
	
	alert('Hello, World! from Maricla Kandzorra Martelli');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	
	element.appendChild(btn);
	
	return element;
}

document.body.appendChild(component());
