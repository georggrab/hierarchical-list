// @flow

import React from 'react';
import logo from 'assets/logo.svg';
import './App.css';

import HierarchyList from 'components/HierarchyList';
import Hierarchy from 'containers/Hierarchy';
import type { HierarchyProps } from 'components/HierarchyList';

const App = () => {
  return (
    // $FlowFixMe: Types for React 16.3 are not in flowlib yet
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Hierarchy />
    </div>
  )
}

export default App