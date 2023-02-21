// IMPORTS //
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import { useLocation } from 'react-router-dom';

// CODE TO CREATE THE HEADER START //
const Header = (props) => {
    const location = useLocation();
    const locationName = location.pathname;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const setPageTitle = (location)  => {
        let pageTitle = "";
        switch(location){
            case '/about':
                pageTitle = 'About';
                return(
                    pageTitle
                );
            case '/work':
                pageTitle = 'Work';
                return(
                    pageTitle
                );
            case '/contact':
                pageTitle = 'Contact';
                return(
                    pageTitle
                );            
            default:
                pageTitle = "noHeader";
                return(
                    pageTitle
                )
            }
        }
        const defineNav = (title) => {
            let pageTitle = title;
            if(pageTitle === 'noHeader'){
                console.log('No header provided.');
            }
            else {
                return(
                    <Container className="outer-container" style={{position: "fixed", left: "50%", transform: "translateX(-50%)"}}>
                            <Row>
                                <Col>
                                    <h1 className="page-title serif italic">{pageTitle}</h1>
                                </Col>
                                <Col id="top-nav">
                                    <Navbar expand="md">
                                        <NavbarToggler onClick={toggle} style={{marginLeft: "auto", marginRight: "5px", backgroundColor: "#6d99f9"}} />
                                        <Collapse isOpen={isOpen} navbar>
                                            <Nav className="me-auto" navbar>
                                                <NavItem className="hamburgerTopping" style={{paddingLeft: 12, paddingRight: 12}}>
                                                    <NavLink to="/"><span className="top-nav-text">Home</span></NavLink>
                                                </NavItem>
                                                <NavItem className="hamburgerTopping" style={{paddingLeft: 12, paddingRight: 12}}>
                                                    <NavLink to="/about"><span className="top-nav-text">About</span></NavLink>
                                                </NavItem>
                                                <NavItem className="hamburgerTopping" style={{paddingLeft: 12, paddingRight: 12}}>
                                                    <NavLink to="/work"><span className="top-nav-text">Work</span></NavLink>
                                                </NavItem>
                                                <NavItem className="hamburgerTopping" style={{paddingLeft: 12, paddingRight: 12}}>
                                                    <NavLink to="/contact"><span className="top-nav-text">Contact</span></NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>
                                    </Navbar>
                                </Col>
                            </Row>
                    </Container>
                )
            }
        }
        return (
               <>
                {defineNav(setPageTitle(locationName))}
               </>
        );
    };

// HEADER CODE END //

// EXPORT STATEMENT //
export default Header;