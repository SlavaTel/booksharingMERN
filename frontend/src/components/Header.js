import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="/">Booksharing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                    <Nav.Link href="/cart">Cart </Nav.Link>
                    <Nav.Link href="/login">Sign In</Nav.Link>
                    <Nav.Link href="/login">Sign Up</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    )
}

export default Header
 