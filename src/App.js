import './App.css';
import React from 'react';
import SearchVisualizer from './components/search-visualizer/search-visualizer';
import HeaderComponent from './components/header/header';
import { algorithms } from './constants/constant';

function App() {
  return (
    <div className="App">
      <HeaderComponent algorithms={algorithms()} />
      <SearchVisualizer />
    </div>
  );
}

export default App;
