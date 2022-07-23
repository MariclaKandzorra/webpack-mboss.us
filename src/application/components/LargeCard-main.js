import Image from 'next/image'
import LargeCard from './src/application/components/LargeCard.js';

run( LargeCard );

ReactDOM.render(<LargeCard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();