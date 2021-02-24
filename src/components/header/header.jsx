import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { setAlgo } from '../../redux/algorithm-selector-reducer/algorithm-selector-actions';
const HeaderComponent = ({ algorithms, setAlgo }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Searching Algo-visualizer</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Select Algorithm" id="collasible-nav-dropdown">
            {algorithms.map((val, idx) => (
              <NavDropdown.Item key={idx} title={val} onClick={setAlgo}>
                {val}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapDispatchToPros = () => (dispatch) => ({
  setAlgo: (e) => dispatch(setAlgo(e.target.title)),
});

export default connect(null, mapDispatchToPros)(HeaderComponent);
