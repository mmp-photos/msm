import { Image, Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from "reactstrap";
import React from 'react';
import { useParams } from 'react';
import PORTFOLIO from '../assets/data/PORTFOLIO.js'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import parse from 'html-react-parser';
import dinoPhoto      from  '../assets/images/matt_dino.png';

const PortfolioPage = () => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>Aboout Me | Matthew Mayer</title>
        </Helmet>
            <main>
            <Container>
                <Row>
                    <Col sm={12} md={6} className ="order-sm-1 order-md-2">
                        <Row>
                            <Col>
                                <div>
                                    <img id="interior-photo-primary" src={dinoPhoto} alt='matt petting a dinosaur' />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <h4 className="italic">TL:DR</h4>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} className ="order-sm-2 order-md-1">
                        <article>
                            <h1></h1>
                        </article>
                    </Col>
                </Row>
            </Container>
            </main>
    </HelmetProvider>
    )
};

export default PortfolioPage;