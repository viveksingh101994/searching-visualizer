import React from 'react';
import styled, { keyframes } from 'styled-components';

const increasingHeightKeyFrame = (height) => keyframes`
    0% { height: 0px; }
    100% { height: ${height}px }
`;

const Bar = styled.div`
  grid-row-start: 1;
  grid-row-end: 75;
  border-radius: 5px 5px 5px 5px;
  padding-top: 7px;
  font-family: sans-serif;
  font-weight: 100;
  display: inline-block;
  color: transparent;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${(props) => props.height + 'px'};
  animation: ${(props) => increasingHeightKeyFrame(props.height)};
  animation-duration: 1s;
  cursor: pointer;
`;

const BarComponent = ({ title, height, backgroundColor, onClick, ...s }) => {
  return (
    <Bar
      className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      title={title}
      height={height}
      backgroundColor={backgroundColor}
      onClick={(e) => onClick(e)}
    ></Bar>
  );
};

export default BarComponent;
