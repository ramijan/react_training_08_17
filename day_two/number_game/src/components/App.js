import React from 'react';
import Game from './game';
import getStore from '../store';
import { Provider } from 'react-redux';

class App extends React.Component {
  state = {
    score: 0,
    gameId: 1
  };
  resetGame = () => {
    this.setState({ gameId: Date.now() });
  };
  render() {
    return (
      // changing a component `key` value basically forces react to recreate element.
      // react treats elements with different keys as completely different elements
      <Provider key={this.state.gameId} store={getStore()}>
        <Game resetGame={this.resetGame} numberCount={5} />
      </Provider>
    );
  }
}

export default App;
