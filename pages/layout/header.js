import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
    const [expanded, setExpanded] = useState(false);


    return (
        <Navbar expanded={expanded} bg="light" expand="lg" className="navbar fixed-top navbar-expand-lg navbar-light">
            <Container>
                <Navbar.Brand href="#home"><img src="/images/logo.png" className="logo" alt="app logo" /></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(true)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => setExpanded(false)} href="#home">Home</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#about-me">About Me</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#skills">Skills</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#latest-projects">Projects</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#contact-me">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;