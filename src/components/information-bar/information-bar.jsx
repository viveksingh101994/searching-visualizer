import React from 'react';
import { connect } from 'react-redux';
import { getAlgorithmsDescription } from '../../constants/constant';

const InformationBarComponent = ({ currentAlgo, children, complexity }) => {
  return (
    <div className="border mt-3">
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="text-lg text-gray-500 font-bold tracking-widest mb-2 uppercase text-left">
              {currentAlgo}
            </h5>
          </div>
          <div className="grid-rows-3">
            {getAlgorithmsDescription(currentAlgo).map((item, idx) => (
              <div key={idx}>
                <h5 className="text-lg text-gray-500 font-bold tracking-widest mb-2 text-right">
                  {item}
                </h5>
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

const mapStateToProp = ({ algorithm: { currentAlgo } }) => {
  return { currentAlgo };
};

export default connect(mapStateToProp, null)(InformationBarComponent);
