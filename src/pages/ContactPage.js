// IMPORTS //
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import mattHomepage from '../assets/images/mattHomepage.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import pdf from "../assets/images/Matthew_Mayer2023.pdf";

const helmetContext = {};

// CREATE CONTACT PAGE //
const ContactPage = () => {
    const downloadResume = () => {
        window.open(pdf, "_blank");
    };

    const sendMail = function sendEmail() {
        window.location = "mailto:matthew@msm.codes";
    };
    return (
        <>
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>Contact Me | Matthew Mayer</title>
            </Helmet>
            <main>
            <Container>
                <Row>
                    <Col xs={10} md={4} className="contact-details-box offset-md-2 offset-1 ">
                        <img id={mattHomepage} src={mattHomepage} className="contact-photo" alt="Matthew Mayer" />
                        <dl>
                        <dt>Name:</dt>
                        <dd>Matthew Mayer</dd>
                        <dt>Pronouns:</dt>
                        <dd>He/Him</dd>
                        <dt>Email:</dt>
                        <dd>matthew@msm.codes</dd>
                        <dt>Phone:</dt>
                        <dd>(503) 360-8986</dd>
                        <dt>Preferred:</dt>
                        <dd>Text or Email</dd>
                        </dl>
                    </Col>
                    <Col xs={12} md={1} className="button-contact-box">
                        <button className="contact"
                            onClick={() => downloadResume()}
                        >
                            <i className="fa fa-file-pdf large-text"></i>
                            <p className="sans half-size-text">Resume</p>
                        </button>
                        <button className="contact"
                            onClick={() => sendMail()}
                        >
                            <i className="fa-regular fa-envelope large-text"></i>
                            <p className="sans half-size-text">matthew@msm.codes</p>
                        </button>
                    </Col>
                </Row>
            </Container>
            </main>
        </HelmetProvider>
        </>
    )
}

// EXPORT STATEMENTS //
export default ContactPage;