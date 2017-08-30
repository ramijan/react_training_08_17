import React from 'react';
import ReactDOM from 'react-dom';

// react 'component'
function Button(props) {
  console.log(props)
  return (
    <button>Go</button>
  );
}

// second syntax for react component
class Button2 extends React.Component {
  render() {
    return (
      <button>Go 2</button>
    );
  }
}

const tree = (
  <div>
    <Button a="1" b="2"/>
    <Button2 />
  </div>
);

ReactDOM.render(
  tree,
  document.getElementById('root')
);
