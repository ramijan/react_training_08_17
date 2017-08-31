import React from 'react';
import Game from './game';
import getStore from '../store';
import { Provider } from 'react-redux';

class App extends React.Component {
  store = getStore();
  state = {
    score: 0,
    gameId: 1
  };
  resetGame = () => {
    this.store = getStore();
    this.setState({ gameId: Date.now() });
  };
  updateScore = (remainingSeconds) => {
    this.setState((prevState) => {
      return { score: prevState.score + 100 * remainingSeconds };
    });
  };
  render() {
    return (
      // changing a component `key` value basically forces react to recreate element.
      // react treats elements with different keys as completely different elements
      <div>
        {this.state.score}
        <Provider key={this.state.gameId} store={this.store}>
          <Game
            resetGame={this.resetGame}
            numberCount={5}
            updateScore={this.updateScore}
          />
        </Provider>
      </div>
    );
  }
}

export default App;
