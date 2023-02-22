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
                    <header>
                    <Container>
                        <Row style={{width: "100%"}}>
                            <Col className="d-sm-9 d-md-6 d-flex justify-content-start">
                                <h1>{pageTitle}</h1>
                            </Col>
                            <Col className="d-sm-3 d-md-6 d-flex justify-content-center">
                                <Navbar expand="md">
                                    <NavbarToggler onClick={toggle} />
                                    <Collapse isOpen={isOpen} navbar>
                                        <Nav className="me-auto" navbar>
                                            <NavItem>
                                                <NavLink to="/">Home</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink to="/about">About</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink to="/work">Work</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink to="/contact">Contact</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                    </header>
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