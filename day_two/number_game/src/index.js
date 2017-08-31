import React from 'react';
import ReactDOM from 'react-dom';

import './store';
import './styles/index.scss';

import Game from './components/Game';

ReactDOM.render(
  <div>
    <Game />
    <Game />
  </div>,
  document.getElementById('root')
);
