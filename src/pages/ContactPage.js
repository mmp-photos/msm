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
                    <Col style={{textAlign: "center"}}>
                        <div style={{backgroundColor: "#6d99f9", padding: 32, borderRadius: "30 degrees"}}>
                            <img id={mattHomepage} src={mattHomepage} className="contact-photo" alt="Matthew Mayer" />
                            <div className="label">Name:</div>
                            <div className="information">Matthew Mayer</div>
                            <div className="label">Pronouns:</div>
                            <div className="information">He/Him</div>
                            <div className="label">Email:</div>
                            <div className="information">matt@msm.codes</div>
                            <div className="label">Phone:</div>
                            <div className="information">(503) 360-8986</div>
                            <div className="label">Preferred communication:</div>
                            <div className="information">Text or Email</div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                            <button id="resume"
                                onMouseEnter={() => setResumeStyle({backgroundColor: "#43598a", color: "white"})}
                                onMouseLeave={() => setResumeStyle({fontStyle: "normal"})}
                                onClick={() => downloadResume()}
                                style={resumeStyle}
                            >
                                <i className="fa fa-file-pdf"></i>
                                <p className="contact-text">Resume</p>
                            </button>
                        <div id="email"
                            onMouseEnter={() => setEmailStyle({backgroundColor: "#43598a", color: "white"})}
                            onMouseLeave={() => setEmailStyle({fontStyle: "normal"})}
                            onClick={() => sendMail()}
                            style={emailStyle}
                        
                        >
                            <i className="fa-regular fa-envelope"></i>
                            <p className="contact-text">matt@msm.codes</p>
                        </div>
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