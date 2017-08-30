import React from 'react';
import ReactDOM from 'react-dom';

// react 'component'
function Button() {
  return (
    <button>Go</button>
  );
}

class Button2 extends React.Component {
  render() {
    return (
      <button>Go 2</button>
    );
  }
}

const tree = (
  <div>
    <Button />
    <Button2 />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
