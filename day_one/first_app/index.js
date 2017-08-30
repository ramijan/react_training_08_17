import React from 'react';
import ReactDOM from 'react-dom';

// react 'component'
function Button() {
  return (
    <button>Go</button>
  );
}

const tree = (
  <div>
    <Button />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
