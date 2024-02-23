// IMPORTS //
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    Collapse
} from 'reactstrap';
import { useLocation } from 'react-router-dom';

// CODE TO CREATE THE HEADER START //
const Header = (props) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const windowWidth = useRef(window.innerWidth);
    const toggle = () => setIsOpen(!isOpen);

    function reload(){
        location.reload();
    };
        
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
            let mobileOnly;
            if(windowWidth.current <= "500"){
                mobileOnly = true
            };
            console.log(mobileOnly)

            return(
                <>
                <header>
                <Container>
                    <Row style={{width: "100%"}}>
                        <Col className="d-sm-9 d-md-6 d-flex justify-content-start">
                            <Link className="home-link" to={"/"}>
                                {pageTitle != 'noHeader' ? <h1>{pageTitle}</h1>
                                                            : null}
                            </Link>
                        </Col>
                    </Row>
                </Container>
                </header>
                <Col className="navbar-placement d-sm-3 d-md-6 d-flex justify-content-center align-items-end">
                <i className="toggler fa-solid fa-angle-down" onClick={toggle}></i>
                <Navbar style={!mobileOnly && pageTitle === 'noHeader' ? {display: "none"} : {display: "block"}} expand="md">                    
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto easeIn" navbar>
                        <NavItem>
                            <NavLink onClick={toggle} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={toggle} to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={reload} to="/work/reload">Work</NavLink>
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
        return (
               <>
                {defineNav(setPageTitle(finalLocation))}
               </>
        );
    };

// HEADER CODE END //

// EXPORT STATEMENT //
export default Header;