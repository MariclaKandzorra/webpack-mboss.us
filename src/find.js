import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.js';
import Header from './application/components/Header';
import InfoCard from './application/components/InfoCard';
import MapGL from './application/core/homepage/silopages/services/search/mapping/mapgl.html';
import Hero from './assets/img/hero';
import * as serviceWorker from './src/serviceWorker.js';

run(Search, Header, InforCard, MapGL, Hero);

ReactDOM.render(<Search />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
