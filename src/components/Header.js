import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
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

const Header = (props) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useRef(window.innerWidth);
  const navRef = useRef(null);
  const [mobileOnly, setMobileOnly] = useState(false);
  const [pageTitle, setPageTitle] = useState();
  const [navRect, setNavRect] = useState(null);
  const [shadow, setShadow] = useState(false);
  const clickHandledRef = useRef(false);
  
  useEffect(() => {
    if (navRef.current && isOpen) {
      const rect = navRef.current.getBoundingClientRect();
      console.log('Nav Rect:', rect);
      setNavRect(rect);
    }
  }, [isOpen]);

  const ForwardedNavbar = forwardRef(({ children, ...rest }, ref) => (
    <Navbar {...rest} ref={ref}>
      {children}
    </Navbar>
  ));

  const toggle = () => {
    setIsOpen(!isOpen);
    if(mobileOnly){
      setShadow(!shadow)
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!clickHandledRef.current && isOpen && Nav && navRef.current && 
          (event.clientX < navRect.left || event.clientX > navRect.right ||
           event.clientY < navRect.top || event.clientY > navRect.bottom)) {
        console.log('Clicked outside of the navigation');
        toggle();
        clickHandledRef.current = true;
        setNavRect(null);
      }
    };
  
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, navRect, toggle]);
  
  // Add a useEffect to reset clickHandledRef.current when isOpen changes
  useEffect(() => {
    clickHandledRef.current = false;
  }, [isOpen]);
  
  
  useEffect(() => {
    if (windowWidth.current <= 500) {
      setMobileOnly(true);
    }
  }, [windowWidth.current]);

  const pathname = String(location.pathname);
  const newLocation = pathname.split("/");
  const finalLocation = newLocation[1];

  useEffect(() => {
    switch (finalLocation) {
      case 'about':
        setPageTitle('About');
        break;
      case 'work':
        setPageTitle('Work');
        break;
      case 'contact':
        setPageTitle('Contact');
        break;
      case 'portfolio':
        setPageTitle('Portfolio');
        break;
      default:
        setPageTitle('noHeader');
    }
  }, [finalLocation]);

  return (
    <>
      <header style={mobileOnly && pageTitle === 'noHeader' ? { backgroundImage: "none" } : null }>
        <Container>
          <Row style={{ width: "100%" }}>
            <Col className="d-sm-9 d-md-6 d-flex justify-content-start">
              <Link className="home-link" to={"/"}>
                {pageTitle !== 'noHeader' ? <h1>{pageTitle}</h1> : null}
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
      <Col className="navbar-placement d-sm-3 d-md-6 d-flex justify-content-center align-items-end">
        <i className="toggler fa-solid fa-angle-down" onClick={toggle}></i>
        <div id="shadow" className={shadow ? "shadow" : null}  ref={navRef} >
        <ForwardedNavbar
          style={!mobileOnly && pageTitle === 'noHeader' ? { display: "none" } : { display: "block" }}
          expand="md">
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto easeIn" navbar style={{filter: "drop-shadow(8px 8px 8px var)"}}>
              <NavItem>
                <NavLink onClick={toggle} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggle} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggle} to="/work">Work</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={toggle} to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <i className="fa-solid fa-angle-up" onClick={toggle}></i>
              </NavItem>
            </Nav>
          </Collapse>
        </ForwardedNavbar>
        </div>
      </Col>
    </>
  );
};

export default Header;
