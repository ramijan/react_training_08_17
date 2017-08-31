import React from 'react';
import Game from './game';
import PropTypes from 'prop-types';
import store from '../store';

class App extends React.Component {
  // sets store to be a global and accessible from any child in the tree
  getChildContext() {
    return { store };
  }
  static childContextTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
      <div>
        <Game numberCount={5} />
      </div>
    );
  }
}

export default App;
