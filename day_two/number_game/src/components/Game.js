import React from 'react';

class Game extends React.Component {
  constructor() {
    super();
    // Generate target
    this.target = Math.floor(10 + (40 * Math.random()));
    // Generate random numbers
  }
  render() {
    return (
      <div>
        <div id="target">
          {this.target}
        </div>
      </div>
    );
  }
}

export default Game;
