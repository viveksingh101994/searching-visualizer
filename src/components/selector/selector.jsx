import React from 'react';
import './selector.css';
const SelectorComponent = ({ children }) => {
  return (
    <div className="selector">
      <span className="spaceRight">{children}</span>
      <i className="fa fa-chevron-circle-down" aria-hidden="true" />
    </div>
  );
};

export default SelectorComponent;
