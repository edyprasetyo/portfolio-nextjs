import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { navbarData, setExpanded } from "../../reducers/navbar/navbarSlice";

function Header() {
    const dispatch = useDispatch()
    const oNavbarData = useSelector(navbarData);

    return (
        <Navbar expanded={oNavbarData.isExpanded} bg="light" expand="lg" className="navbar fixed-top navbar-expand-lg navbar-light">
            <Container>
                <Navbar.Brand href="#home"><img src="/images/logo.png" className="logo" alt="app logo" /></Navbar.Brand>
                <Navbar.Toggle onClick={() => dispatch(setExpanded(!oNavbarData.isExpanded))} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => dispatch(setExpanded(false))} href="#home">Home</Nav.Link>
                        <Nav.Link onClick={() => dispatch(setExpanded(false))} href="#about-me">About Me</Nav.Link>
                        <Nav.Link onClick={() => dispatch(setExpanded(false))} href="#skills">Skills</Nav.Link>
                        <Nav.Link onClick={() => dispatch(setExpanded(false))} href="#latest-projects">Projects</Nav.Link>
                        <Nav.Link onClick={() => dispatch(setExpanded(false))} href="#contact-me">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;