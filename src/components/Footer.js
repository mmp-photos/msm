import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <Container fluid className={'site-footer'}>
            <div className="container centered" style={{height: "100%"}}>
                <Row>
                    <Col className=" d-sm-6 col-md-8 offset-md-0 align-items">
                        <Link to="/"><h1 className="footer">matthew mayer</h1></Link>
                    </Col>
                    <Col className="col-sm-6 col-md-4">
                        <footer className="footer-padding-top">
                            <a href="https://www.instagram.com/mmp_photos/" alt='LinkedIN'>
                            <div className='social-buttons' id="instagram"><i className='fa fa-instagram instagram' style={{color: '#c32aa3'}}></i></div>
                            </a>
                            <a href="https://codepen.io/matthew-mayer" alt='LinkedIN'>
                            <div className='social-buttons' id="codepen" style={{color: "grey"}}><i className="fa-brands fa-codepen"></i></div>
                            </a>
                            <a href="https://github.com/mmp-photos" alt='LinkedIN'>
                            <div className='social-buttons' id="github"><i className='fa fa-github' style={{color: '#410093'}}></i></div>
                            </a>
                            <a href="https://www.linkedin.com/in/matthew-s-mayer/" alt='LinkedIN'>
                            <div className='social-buttons' id="linkedin"><i className="fa fa-linkedin" style={{color: '#0077b5'}}></i></div>
                            </a>
                        </footer>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Footer;

