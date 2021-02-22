import React from 'react';
import SelectorComponent from '../selector/selector';
import './header.css';
const HeaderComponent = ({ algorithms }) => {
  return (
    <div className="topnav" id="myTopnav">
      <div className="active">Searching algo-visualizer</div>
      <span style={{ float: 'right', overflow: 'hidden' }}>
        <SelectorComponent items={algorithms}>Algorithm</SelectorComponent>
      </span>
    </div>
  );
};

export default HeaderComponent;
