import React from "react"
import PropTypes from "prop-types"
import {Nav, NavDropdown, Navbar} from 'react-bootstrap'
import { useAuth } from '../contexts/authContext';
// import Image from 'react-bootstrap/Image';
// import natureBackground from '../media/natureBackground.jpg'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
// import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import '../styles/layout.css';


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
        <main id="main">
            {children}
        </main>
        
        {/* </div>

</div> */}
        <footer>
            <Navbar bg="dark">
                <Navbar.Brand style={{color: "white", fontSize: "20px"}}>Created by Arpita Das, Sagnik Nayak, Tejas Pruthi, and Simran Sidhu</Navbar.Brand>
            </Navbar>
        </footer>
    </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
