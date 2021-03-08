import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import NavBarDropDown from '../navbar-dropdown/navbar-dropdown'
const HeaderComponent = ({ algorithms }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Algo-viz</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavBarDropDown title="Select Algorithm" id="collasible-nav-dropdown" algorithms={algorithms}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default connect(null, null)(HeaderComponent);
