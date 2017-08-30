import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Button label="Save2" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
