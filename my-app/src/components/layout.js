import React from "react"
import PropTypes from "prop-types"
import {Nav, NavDropdown, Navbar} from 'react-bootstrap'
import { useAuth } from '../contexts/authContext';

const Layout = ({ children }) => {

    const { logout } = useAuth();

  return (
    <>
        <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link onClick={logout} href="/">
                    Logout
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </header>
        <main>{children}</main>
        <footer>
            <Navbar bg="dark">
                <Navbar.Brand>Brand text</Navbar.Brand>
            </Navbar>
        </footer>
                </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
