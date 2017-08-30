import React from 'react';
import ReactDOM from 'react-dom';

setInterval(() => {

  const jsTree = `
    <div>
      <h2>Hello JS</h2>
      <span>${new Date()}</span>
    </div>
  `;

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
      new Date().toString()
    )
  );

  document.getElementById('js').innerHTML = jsTree;
  ReactDOM.render(
    tree,
    document.getElementById('root')
  );
}, 1000);
