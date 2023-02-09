import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import iconAdobePS    from '../assets/images/logos/photoshop.svg';
import iconAdobeFonts from '../assets/images/logos/fonts.svg';
import iconAdobeAI from '../assets/images/logos/illustrator.svg';
import iconAdobeID from '../assets/images/logos/indesign.svg';
import iconReact      from '../assets/images/logos/react-2.svg';
import iconHTML       from '../assets/images/logos/html-1.svg';
import iconCss3       from '../assets/images/logos/css-3.svg';
import iconMongoDB    from '../assets/images/logos/mongodb-icon-1.svg';
import iconMySQL      from '../assets/images/logos/mysql-3.svg';
import iconBoostrap   from '../assets/images/logos/bootstrap-5-1.svg';
import iconJavascript from '../assets/images/logos/logo-javascript.svg';
import iconPhp        from '../assets/images/logos/php-1.svg';
import iconNode       from '../assets/images/logos/nodejs-icon.svg';

export const workMain = (workType) => {
    return(
        <div id="right-column">
        <Row className="negative-ten-degrees-left">
            <Col>
                <img style={{width: 75}} src={iconAdobePS} alt='Adobe Photoshop' />
                </Col>
                <Col>
                    <img style={{width: 75}} src={iconAdobeAI} alt='Adobe Illustrator' />
                </Col>
                <Col>
                    <img style={{width: 75}} src={iconAdobeID} alt='Adobe InDesign' />
                </Col>
                <Col>
                    <img style={{width: 75}} src={iconAdobeFonts} alt='Adobe Fonts' />
                </Col>
        </Row>
        <Row className="negative-ten-degrees-right" style={{paddingLeft: 86}}>
            <Col>
                <img style={{width: 75}} src={iconCss3} alt='CSS 3' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconReact} alt='React.js' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconAdobePS} alt='Adobe Photoshop' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconHTML} alt='HTML 5' />
            </Col>
        </Row>
        <Row className="negative-ten-degrees-left" style={{paddingLeft: 12}}>
            <Col>
                <img style={{width: 75}} src={iconMongoDB} alt='MongoDB' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconMySQL} alt='MySQL' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconBoostrap} alt='Bootstrap' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconJavascript} alt='Javascript' />
            </Col>
        </Row>
        <Row className="negative-ten-degrees-right" style={{paddingLeft: 12}}>
            <Col>
                <img style={{width: 75}} src={iconPhp} alt='PHP' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconNode} alt='Node' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconBoostrap} alt='Bootstrap' />
            </Col>
            <Col>
                <img style={{width: 75}} src={iconJavascript} alt='Javascript' />
            </Col>
        </Row>
    </div>
    )
};

export const workDeveloper = () => {
    return(
        <>
            <h2>Front End Development</h2>
            <div className='work-skills'></div>
        </>
    )
};

export const workMarketer = () => {
    return(
        <p>This is the marketer content</p>
    )
};

export const workHumor = () => {
    return(
        <p>This is the humor content</p>
    )
};