import * as React from 'react';
import './App.css';
import Hello from './components/Hello'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello interest={10} name='typescript' />
      </div>
    );
  }
}

export default App;
