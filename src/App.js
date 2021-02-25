import './App.css';
import React from 'react';
import SearchVisualizer from './components/search-visualizer/search-visualizer';
import HeaderComponent from './components/header/header';

function App() {
  return (
    <div className="App">
      <HeaderComponent
        algorithms={['linear-search', 'binary-search', 'jump-search']}
      />
      <SearchVisualizer />
    </div>
  );
}

export default App;
