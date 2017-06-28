// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {getRandomInt, getHalf} from 'Helpers';

const size: number = 11;
const blue: number = getRandomInt(size);
const reds: Array<number> = [getRandomInt(size)];
const selected: number = getHalf(size);
const yellow: number = getRandomInt(size);

ReactDOM.render(
  <App
    blue={blue}
    reds={reds}
    selected={selected}
    size={size}
    yellow={yellow}
  />,
  document.getElementById('root'));
registerServiceWorker();
