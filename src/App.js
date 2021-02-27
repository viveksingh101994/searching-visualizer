import './App.css';
import React from 'react';
import SearchVisualizer from './components/search-visualizer/search-visualizer';
import HeaderComponent from './components/header/header';
import { algorithms } from './constants/constant';
import InformationBarComponent from './components/information-bar/information-bar';

function App() {
  return (
    <div className="App">
      <HeaderComponent algorithms={algorithms()} />
      <div className="container">
        <InformationBarComponent>
          <SearchVisualizer />
        </InformationBarComponent>
      </div>
    </div>
  );
}

export default App;
