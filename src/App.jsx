import React, { Component } from 'react';
import { Button } from 'antd';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Hello React!</Button>
      </div>
    );
  }
}

export default App;