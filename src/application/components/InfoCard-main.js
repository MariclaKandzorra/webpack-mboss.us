import Image from 'next/image';
import { HeartIcon } from '../node_modules/@heroicons/react/solid';
import { StarIcon } from '../node_modules/@heroicons/react/outline';
import InfoCard from './src/application/components/InfoCard.js';

run( InfoCard );

ReactDOM.render(<InfoCard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();