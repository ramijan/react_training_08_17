import React, { Component } from 'react';

// called a "class component"
// only class components have state
class Button extends Component {
  state = {
    counter: 1
  };

  // simpler way to bind this, but it's stage-3
  incrementCounter = (event) => {
    event.preventDefault();
    // setState is like "merge with current state"
    // if you are going to use previous state to calculate new state, better
    // to use function argument instead of object.  Because setState is async
    this.setState((prevState) => {
      return {counter: prevState.counter+1};
    });
  }

  render() {
    aaaaa
    return (
      <button type="submit" onClick={this.incrementCounter}>
        {this.state.counter}
      </button>
    );
  }
}

export default Button;
// equivalent to module.exports = Button;
