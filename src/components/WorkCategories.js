import React from 'react';
import { Row, Col } from 'reactstrap';
import Carousel from '../utils/Carousel';
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

export const workMain = (workType) => {
    return(
        <div style={{ backgroundColor: "#43598a", borderRadius: "30px", height: "300px", overflow: "hidden"}}>
        <Row className="negative-ten-degrees-left">
            <Col>
                <img className="sliding-icons"s src={iconAdobeAI} alt='Adobe Illustrator' />
            </Col>
            <Col>
                <img className="sliding-icons" src={iconAdobePS} alt='Adobe Photoshop' />
            </Col>
            <Col>
                <img className="sliding-icons" src={iconJavascript} alt='Javascript' />
            </Col>
        </Row>
        <Row className="negative-ten-degrees-right" style={{paddingLeft: 86}}>
            <Col>
                <img className="sliding-icons" src={iconCss3} alt='CSS 3' />
            </Col>
            <Col>
                <img className="sliding-icons" src={iconReact} alt='React.js' />
            </Col>
            <Col>
                <img className="sliding-icons" src={iconAdobeFonts} alt='Adobe Fonts' />
            </Col>
        </Row>
        <Row className="negative-ten-degrees-left" style={{paddingLeft: 12}}>
            <Col>
                <img className="sliding-icons" src={iconMySQL} alt='MySQL' />
            </Col>
            <Col>
                <img className="sliding-icons" src={iconMongoDB} alt='MongoDB' />
            </Col>
            <Col>
                <img className="sliding-icons" src={iconBoostrap} alt='Bootstrap' />
            </Col>
        </Row>
        <Row className="negative-ten-degrees-right" style={{paddingLeft: 12}}>
            <Col>
                <img className="sliding-icons" src={iconHTML} alt='HTML5' />
            </Col>
            <Col>
                <img className="sliding-icons" src={iconNode} alt='Node' />
            </Col>
            <Col>
                <img className="sliding-icons" src={iconPhp} alt='PHP' />
            </Col>
        </Row>
    </div>
    )
};

export const workDeveloper = () => {
    let slideDeck = "developer";
    return(
        <>
        <Carousel slides={{slides: slideDeck}}/>
            <h2>Front End Web Development</h2>
            <p className="sans">Your brand's online identity is essential to your company.  Websites have only grown in both importance and capability.
                I understand both.
            </p>
            <p className="sans">Specializing in MERN Stack apps built on a solid base of HTML5 and CSS3 I create sites
                that are flexible and scalable.  Unleash the power of Javascript and MongoDB and pair with existing APIs from Square
                and Google.  Find the features that best serve your audience and the style that best represents you.
            </p>
        </>
    )
};

export const workMarketer = () => {
    let slideDeck = "marketer";
    return(
        <>
            <Carousel slides={{slides: slideDeck}}/>
            <h2>Marketing Consultant</h2>
            <p className="sans">Communicating effectively is the most important thing a company can do for its audience.</p>
            <p className="sans">It's not only about content and tone.  The medium is equally important.  Should you be blogging?  Or posting to TikTok?
                Would an email campgaign be the best way to reach your audience? It's all part of a strategy I can provide.
            </p>
            <p className="sans">From logo design to establishing a unified tone and messaging strategy I can help you spread your message to your readers.
            </p>
        </>
    )
};

export const workHumor = () => {
    let slideDeck = "content";
    return(
        <>
            <Carousel slides={{slides: slideDeck}}/>
            <h2>Humor Writer</h2>
            <p className="sans">Being funny isn't as easy as comedians make it look.  Humor - especially satire requires a delicate touch.</p>
            <p className="sans">I can help punch up existing material.  Give your copy a careful rewrite to bring some targeted levity to your work.
                With influences from Don Knotts to Jon Stewart I can span the gamut of styles to craft a message and voice that is a specific fit to your need
            </p>
        </>
    )
};