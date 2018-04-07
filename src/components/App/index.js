// @flow

import React, { Component } from 'react';
import logo from 'assets/logo.svg';
import './App.css';

import HierarchyList from 'components/HierarchyList';
import type { Hierarchy, HierarchyProps } from 'components/HierarchyList';

import { flatHierarchy } from 'testAssets/HierarchyList';

class App extends Component<void> {
  hierarchy = {};

  render() {
    return (
      // $FlowFixMe: Types for React 16.3 are not in flowlib yet
      <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HierarchyList hierarchy={flatHierarchy}></HierarchyList>
      </div>
      </React.StrictMode>
    );
  }
}

export default App;
