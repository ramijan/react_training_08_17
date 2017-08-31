import React from 'react';
import Game from './game';

class App extends React.Component {
  render() {
    return (
      <div>
        <Game numberCount={5} />
        <Game numberCount={7} />
      </div>
    );
  }
}

export default App;
