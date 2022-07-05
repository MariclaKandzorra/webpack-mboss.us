import style from './globals.css';
import component from './component.js';


console.log('Hello')
console.log('Bye')
console.log(process.env.pkgJson.version);

document.body.append(component());


