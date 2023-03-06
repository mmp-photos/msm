import { Container, Row, Col } from "reactstrap";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import PORTFOLIO from '../assets/data/PORTFOLIO.js'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import parse from 'html-react-parser';

const PortfolioPage = () => {
    const helmetContext = {};
    const primaryImage = useRef();
    const toolTip = useRef();
    const externalLinks = useRef();
    let { portfolioID} = useParams();
    const [ refreshTools, setRefreshTools ] = useState();

    /* SET PORTFOLIO TO INDEX 0 IF THERE ARE NO PARAMS*/
    if(!portfolioID ? portfolioID = 'googlyPress' : null);

    let portfolioItem = PORTFOLIO.find(port => port.params === portfolioID);

    /*UPDATE THE PRIMARY IMAGE*/
    function handleClick(imgSrc){
        primaryImage.current.src = imgSrc;
        console.log(primaryImage);
    };

    /*UPDATED THE TOOLTIPS FOR THE TECHNOLOGY ICONS*/
    function updateToolTip(tool){
        toolTip.current.className = 'portfolio-tech-tips-in';
        toolTip.current.innerHTML = `<span className="portfolio-tech-tips">${tool}</span>`;
    };
    function removeToolTip(tool){
        toolTip.current.className = 'portfolio-tech-tips-out'
    };

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
                                    <img ref={primaryImage} className="portfolio" src={portfolioItem.images[0]} alt={portfolioItem.title} />
                                    <p className="modal-art-credit"> {portfolioItem.artCredit != null ? portfolioItem.artCredit : null} </p>
                                </div>
                            </Col>
                        </Row>
                            {portfolioItem.images.length >1 ? portfolioItem.images.map((imgSrc, index) => (<img className="portfolio-thumbnails" onClick = {() => {handleClick(imgSrc)}} src={imgSrc} key={index} alt="Make sure to include a alt tag, because react might throw an error at build"/>)) : null }
                            <span ref={externalLinks}></span>
                        <Row>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} className ="order-sm-2 order-md-1">
                        <article>
                            <h2>{portfolioItem.title}</h2>
                            <dl style={{display: "grid"}}>
                                <dt>Project Status:</dt>
                                <dd>{portfolioItem.status}</dd>
                                <dt>Project Goals</dt>
                                <dd>{portfolioItem.description}</dd>
                                <dt>Role:</dt>
                                <dd>{portfolioItem.role}</dd>
                                <dt>Technologies used:</dt>
                                <dd>{portfolioItem.tech.map((imgSrc, index) => (<img className="portfolio-icons" 
                                                                                     src={imgSrc[0]} key={index} 
                                                                                     alt={imgSrc[1]}
                                                                                     onMouseEnter={() => updateToolTip(imgSrc[1])}
                                                                                     onMouseLeave={() => removeToolTip()}/>))}
                                                                                </dd>
                                <dt></dt>
                                <dd style={{minHeight: "24px"}}><div className={refreshTools} ref={toolTip}></div></dd>
                            </dl>
                            {parse('<div>' + portfolioItem.content + '</div>')}
                        </article>
                    </Col>
                </Row>
            </Container>
            </main>
    </HelmetProvider>
    )
};

export default PortfolioPage;