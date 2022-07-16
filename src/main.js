import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/index.js';
import Banner from './src/application/components/Banner.js';
import Footer from './src/application/components/Footer.js';
import Header from './src/application/components/Header.js';
import InfoCard from './src/application/components/InfoCard.js';
import LargeCard from './src/application/components/LargeCard.js';
import MediumCard from './src/application/components/MediumCard.js';
import SmallCard from './src/application/components/SmallCard.js';
import Hero from './src/assets/img/hero.gif';
import * as serviceWorker from './src/serviceWorker.js';

run(Home, Banner, Footer, Header, InforCard, LargeCard, MediumCard, SmallCard, Hero);

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
