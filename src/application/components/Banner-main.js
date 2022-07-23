import Image from 'next/image';
import Banner from './src/application/components/Banner.js';
import hero from './assets/img/hero';

run( Banner,  hero );

ReactDOM.render(<Banner />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();