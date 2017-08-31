import React from 'react';
import PropTypes from 'prop-types';
import { randomNumberGenerator } from '../store/util';

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
  }
  constructor() {
    super();
    // Generate target
    // this.target = Math.floor(10 + (40 * Math.random()));
    // Generate random numbers
    // this.randomNumbers = [];
  }
  render() {
    return (
      <div>
        <div id="target">...</div>
        <div id="random-numbers">
          TESTING: {this.props.numberCount}
        </div>
      </div>
    );
  }
}

export default Game;
