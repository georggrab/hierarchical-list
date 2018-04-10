// @flow
import React from "react";
import "typeface-inconsolata";
import "./App.css";

import Hierarchy from "containers/Hierarchy";
import HierarchySettings from "containers/HierarchySettings";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My nice Hierarchical List</h1>
      </header>
      <HierarchySettings />
      <Hierarchy />
    </div>
  );
};

export default App;
