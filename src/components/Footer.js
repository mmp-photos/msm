import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <footer>
        <Container fluid className={'site-footer'}>
            <Row>
                <Col className="d-flex justify-content-center align-items-center d-xs-6 col-md-8">
                    <Link to="/"><h4>matthew mayer</h4></Link>
                </Col>
                <Col className="d-flex justify-content-start align-items-center col-xs-6 col-md-4">
                    <a href="https://www.instagram.com/mmp_photos/" alt='Instagram' target="new">
                        <i className='fa fa-instagram instagram'></i>
                    </a>
                    <a href="https://codepen.io/matthew-mayer" alt='CodePen' target="new">
                        <i className="fa-brands fa-codepen"></i>
                    </a>
                    <a href="https://github.com/mmp-photos" alt='GitHub' target="new">
                        <i className='fa fa-github'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-s-mayer/" alt='LinkedIN' target="new">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer;

