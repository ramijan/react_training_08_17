import React from 'react';

// when to use class component
// 1. need state
// 2. need lifecycle methods
// 3. ???

function Button(props) {
  return (
    <button onClick={() => {props.onClick(props.increment);}}>
      {props.increment}
    </button>
  );
}

export default Button;
// equivalent to module.exports = Button;
