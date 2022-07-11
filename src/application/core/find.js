import React from 'react';
import ReactDOM from 'react-dom';
import './src/library/css/search.css';
import Search from './src/application/core/search';
import * as serviceWorker from './src/application/core/serviceWorker';

ReactDOM.render(<Search />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
