import React, { Component } from 'react';
import './App.css';
import EndpointTest from './components/EndpointTest'
import MainMenu from './components/structure/MainMenu'
import MainContainer from './components/structure/MainContainer'

class App extends Component {
  render() {
    return (
      <div>
        <EndpointTest/>
        <MainMenu/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
