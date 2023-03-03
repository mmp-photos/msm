import { Image, Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from "reactstrap";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import PORTFOLIO from '../assets/data/PORTFOLIO.js'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import parse from 'html-react-parser';

import developer01 from '../assets/images/portfolio/developer01.png';
import developer02 from '../assets/images/portfolio/developer02.png';
import marketer02 from '../assets/images/portfolio/marketing02.png';
import marketer01 from '../assets/images/portfolio/marketing01.png';
import content01 from '../assets/images/portfolio/content01.png';
import content02 from '../assets/images/portfolio/content02.png';

import iconAdobePS    from '../assets/images/logos/photoshop.svg';
import iconAdobeFonts from '../assets/images/logos/fonts.svg';
import iconAdobeAI from '../assets/images/logos/illustrator.svg';
import iconReact      from '../assets/images/logos/react-2.svg';
import iconHTML       from '../assets/images/logos/html-1.svg';
import iconCss3       from '../assets/images/logos/css-3.svg';
import iconMongoDB    from '../assets/images/logos/mongodb-icon-1.svg';
import iconMySQL      from '../assets/images/logos/mysql-3.svg';
import iconBoostrap   from '../assets/images/logos/bootstrap-5-1.svg';
import iconJavascript from '../assets/images/logos/logo-javascript.svg';
import iconPhp        from '../assets/images/logos/php-1.svg';
import iconNode       from '../assets/images/logos/nodejs-icon.svg';

const PortfolioPage = () => {
    const helmetContext = {};
    const primaryImage = useRef();
    const toolTip = useRef();
    const externalLinks = useRef();
    let { portfolioID} = useParams();
    const [ refreshTools, setRefreshTools ] = useState();

    /* SET PORTFOLIO TO INDEX 0 IF THERE ARE NO PARAMS*/
    if(!portfolioID ? portfolioID = 'googlyPress' : null);

    let portfolioItem = PORTFOLIO.find(port => port.params == portfolioID);

    /* DISPLAY ICONS FOR EACH TECHNOLOGY USED */
    const techIcons = (icon) => {
        return `<img src=${icon} />`;
    };

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
    function linkWebsite(site){
        if(site){
            return(
                `<i class="fa-solid fa-globe" onClick=${window.open(site, '_blank')}}</i>`
            )
        } else {
            return
        }
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
                                    <img ref={primaryImage} className="portfolio" src={portfolioItem.images[0]} />
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