import React from 'react';
import { connect } from 'react-redux';
const StatusComponent = ({ isRunning }) => {
  return (
    <span className="relative inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150"
      >
        {getStatusAsPerIsRunning(isRunning)}
      </button>
      {isRunning === -1 ? (
        <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      ) : (
        ''
      )}
    </span>
  );
};

const getStatusAsPerIsRunning = (isRunning) => {
  if (isRunning === 0) {
    return 'Select an item';
  } else if (isRunning === 1) {
    return 'Item found';
  } else if (isRunning === -1) {
    return 'Searching';
  }
};

const mapStateToProp = ({ algorithm: { isRunning } }) => {
  return {
    isRunning,
  };
};

export default connect(mapStateToProp, null)(StatusComponent);
