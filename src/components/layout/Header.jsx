import React from 'react';
import Logo from '../../images/Logo.png';
import {
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap';

import './Header.scss';

const Header = () => (
  <Navbar expand='md' className='header'>
    <Container className='header-container'>
      <NavbarBrand href='#home'>
        <img src={Logo} alt='Befu'/>
      </NavbarBrand>
      <Nav navbar className='align-content-end'>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className='navigation-link'>
            Hi, Dr. Alex
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Account
            </DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
