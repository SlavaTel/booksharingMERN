import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >Booksharing</Navbar.Brand>
          </LinkContainer>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contacts'>
              <Nav.Link>Contacts</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link>Cart </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
 