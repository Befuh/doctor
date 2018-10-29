import React from 'react';
import Logo from '../../images/Logo.png';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

import './Header.scss';

const Header = () => (
  <Navbar expand='md' className='header'>
    <Container>
      <Navbar.Brand href='#home'>
        <Image src={Logo} alt='Befu'/>
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav.Link eventKey={1} href='#' className='active navigation-link'>Patients</Nav.Link>
        <Nav.Link eventKey={2} href='#' className='navigation-link'>Hospitals</Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
