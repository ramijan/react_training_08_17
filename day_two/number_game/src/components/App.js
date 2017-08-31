import React from 'react';
import Game from './game';
import PropTypes from 'prop-types';
import getStore from '../store';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.store = getStore();
  }
  // wrong way to do this
  // sets store to be a global and accessible from any child in the tree
  // getChildContext() {
  //   return { store: this.store };
  // }
  // static childContextTypes = {
  //   store: PropTypes.object.isRequired
  // };
  render() {
    return (
      <Provider store={this.store}>
        <Game numberCount={5} />
      </Provider>
    );
  }
}

export default App;
