import React from 'react';
import ReactDOM from 'react-dom';

setInterval(() => {

  const tree = <div>
    <h2>Hello React</h2>
    <input />
    <span>{new Date().toString()}</span>
  </div>;

  ReactDOM.render(
    tree,
    document.getElementById('root')
  );

}, 1000);
