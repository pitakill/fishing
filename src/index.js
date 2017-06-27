// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App selected={61} size={11}/>, document.getElementById('root'));
registerServiceWorker();
