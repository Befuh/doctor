import React, { Component } from 'react';
import Logo from '../../images/Logo.png';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import './Header.scss';

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = event => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render () {
    return (
      <Navbar expand='md' color='light' light className='header'>
        <Container className='header-container'>
          <NavbarBrand href='#home'>
            <img src={Logo} alt='Befu'/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar className='push-right'>
            <Nav navbar>
              <NavItem>
                <NavLink href='#' className='active navigation-link'>Patients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#' className='navigation-link'>Hospitals</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
