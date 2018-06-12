import React, { Component } from 'react';
import Home from './home'
import Menu from './menu'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu/>
        <Home/>
      </div>
    );
  }
}

export default App;
