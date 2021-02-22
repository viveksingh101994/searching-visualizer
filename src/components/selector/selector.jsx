import React from 'react';
import './selector.css';
const SelectorComponent = ({ children, items }) => {
  return (
    <div className="selector">
      <span className="spaceRight">{children}</span>
      <i className="fa fa-chevron-circle-down" aria-hidden="true" />
      {/* <div className="dropdown-content">
        {items.map((val, idx) => (
          <div key={idx}>{val}</div>
        ))}
      </div> */}
    </div>
  );
};

export default SelectorComponent;
