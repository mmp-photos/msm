// IMPORTS //
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';
import mattHomepage from '../assets/images/mattHomepage.png';
import { InstagramEmbed } from 'react-social-media-embed';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import pdf from "../assets/images/Matthew_Mayer2023.pdf";

const helmetContext = {};

// CREATE CONTACT PAGE //
const ContactPage = () => {
    const [ resumeStyle, setResumeStyle] = useState({});
    const [ emailStyle, setEmailStyle]   = useState({});

    const downloadResume = () => {
        window.open(pdf, "_blank");
    };

    const sendMail = function sendEmail() {
        window.location = "mailto:matt@msm.codes";
    };
    return (
        <>
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>Contact Me | Matthew Mayer</title>
            </Helmet>
            <Container className="inner-container">
                <Row>
                    <Col className="contact-column-left">
                        <div style={{backgroundColor: "#6d99f9", padding: 32, borderRadius: 30}}>
                            <img id={mattHomepage} src={mattHomepage} className="contact-photo" alt="Matthew Mayer" />
                            <dl>
                            <dt>Name:</dt>
                            <dd>Matthew Mayer</dd>
                            <dt>Pronouns:</dt>
                            <dd>He/Him</dd>
                            <dt>Email:</dt>
                            <dd>matt@msm.codes</dd>
                            <dt>Phone:</dt>
                            <dd>(503) 360-8986</dd>
                            <dt>Preferred:</dt>
                            <dd>Text or Email</dd>
                            </dl>
                        </div>
                    </Col>
                    <Col sm={12} md={4} style={{textAlign: "center"}}>
                        <button id="resume"
                                onMouseEnter={() => setResumeStyle({backgroundColor: "#43598a", color: "white"})}
                                onMouseLeave={() => setResumeStyle({fontStyle: "normal"})}
                                onClick={() => downloadResume()}
                                style={resumeStyle}
                            >
                                <span style={{fontSize: "6em"}}><i className="fa fa-file-pdf"></i></span>
                                <p className="contact-text">Resume</p>
                            </button>
                        <button id="email"
                            onMouseEnter={() => setEmailStyle({backgroundColor: "#43598a", color: "white"})}
                            onMouseLeave={() => setEmailStyle({fontStyle: "normal"})}
                            onClick={() => sendMail()}
                            style={emailStyle}
                        
                        >
                            <span style={{fontSize: "6em"}}><i className="fa-regular fa-envelope"></i></span>
                            <p className="contact-text">matt@msm.codes</p>
                        </button>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <InstagramEmbed url="https://www.instagram.com/mmp_photos/" width={328}/>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
        </>
    )
}

// EXPORT STATEMENTS //
export default ContactPage;