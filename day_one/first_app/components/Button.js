import React from 'react';

// when to use class component
// 1. need state
// 2. need lifecycle methods
// 3. ??? => Prototype functions for events

class Button extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.increment);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.increment > 0 ? '+' : ''}{this.props.increment}
      </button>
    );
  }
}

export default Button;
// equivalent to module.exports = Button;
