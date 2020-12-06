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
            <Navbar.Brand href="/">Energy Buddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/goals">Goals</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                
                </Nav>
                <Nav>
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
