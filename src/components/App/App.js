// @flow

import React, { Component } from 'react';
import logo from 'assets/logo.svg';
import './App.css';

class App extends Component<void> {
  render() {
    return (
      // $FlowFixMe: Types for React 16.3 are not in flowlib yet
      <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </React.StrictMode>
    );
  }
}

export default App;
