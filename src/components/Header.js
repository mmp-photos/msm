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
import { workMain } from '../components/WorkCategories';

// CODE TO CREATE THE HEADER START //
const Header = (props) => {
    const location = useLocation();
    const locationName = location.pathname;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [expanded, setExpanded] = useState(false);
    const [ reloadRightColumn, setReloadRightColumn ] = useState(false);
        
    const resetWork = () => {
        setIsOpen(!isOpen);
        reloadRightColumn(true);
    }
    const pathname = String(location.pathname);
    const newLocation = pathname.split("/");
    const finalLocation = newLocation[1];
    const setPageTitle = (location)  => {
        let pageTitle = "";
        switch(location){
            case 'about':
                pageTitle = 'About';
                return(
                    pageTitle
                );
            case 'work':
                pageTitle = 'Work';
                return(
                    pageTitle
                );
            case 'contact':
                pageTitle = 'Contact';
                return(
                    pageTitle
                );            
                case 'portfolio':
                    pageTitle = 'Portfolio';
                    return(
                        pageTitle
                    );            
                default:
                pageTitle = "noHeader";
                console.log(location);
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
                    <>
                    <header>
                    <Container>
                        <Row style={{width: "100%"}}>
                            <Col className="d-sm-9 d-md-6 d-flex justify-content-start">
                                <h1>{pageTitle}</h1>
                            </Col>
                        </Row>
                    </Container>
                    </header>
                    <Col className="navbar-placement d-sm-3 d-md-6 d-flex justify-content-center align-items-end">
                    <i className="toggler fa-solid fa-angle-down" onClick={toggle}></i>
                    <Navbar expand="md">                    
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink onClick={toggle} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={toggle} to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={resetWork} to="/work">Work</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={toggle} to="/contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                            <i className="fa-solid fa-angle-up" onClick={toggle}></i>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </Col>
                </>
            )
            }
        }
        return (
               <>
                {defineNav(setPageTitle(finalLocation))}
               </>
        );
    };

// HEADER CODE END //

// EXPORT STATEMENT //
export default Header;