import React from 'react';  
import { NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAlgo } from '../../redux/algorithm-selector-reducer/algorithm-selector-actions';

const NavBarDropDown = ({title, algorithms, arrayLength, setAlgoDispatch})=>{
    return(<React.Fragment>
        <NavDropdown title={title} id="collasible-nav-dropdown">
            {algorithms.map((val, idx) => (
              <NavDropdown.Item
                key={idx}
                title={val}
                onClick={(e) => setAlgoDispatch(e, arrayLength)}
              >
                {val}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
    </React.Fragment>)
}

const mapStateToProp = ({ operation: { arrayLength } }) => {
    return {
      arrayLength,
    };
  };
  

const mapDispatchToPros = () => (dispatch) => ({
    setAlgoDispatch: (e, arrayLength) =>
      dispatch(setAlgo(e.target.title, parseInt(arrayLength))),
  });

export default connect(mapStateToProp,mapDispatchToPros)(NavBarDropDown);