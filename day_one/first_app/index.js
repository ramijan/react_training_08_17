import React from 'react';
import ReactDOM from 'react-dom';


document.getElementById('js').innerHTML = `
  <div>
    <h2>Hello JS</h2>
    <span>${new Date()}</span>
  </div>
`

const tree = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    'Hello React'
  ),
  React.createElement(
    'span',
    null,
    'Date...'
  )
);

ReactDOM.render(
  tree,
  document.getElementById('root')
)
