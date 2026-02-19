import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Intentionally broken: wrong method name (should be ReactDOM.render)
ReactDOM.rendr(<App />, document.getElementById('root'));
