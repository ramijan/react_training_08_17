import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Button label="Save1" />
        <Button label="Save2" />
        <Button label="Save3" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
