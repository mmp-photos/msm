// IMPORTS //
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import mattHomepage from '../assets/images/mattHomepage.png';
import { InstagramEmbed } from 'react-social-media-embed';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import pdf from "../assets/images/Matthew_Mayer2023.pdf";

const helmetContext = {};

// CREATE CONTACT PAGE //
const ContactPage = () => {
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
            <main>
            <Container>
                <Row>
                    <Col className="sm-8 md-3 offset-sm-2">
                        <aside>
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
                        </aside>
                    </Col>
                    <Col className="button-contact-box" sm={12} md={4}>
                        <button className="contact"
                            onClick={() => downloadResume()}
                        >
                            <i className="fa fa-file-pdf large-text"></i>
                            <p className="half-size-text">Resume</p>
                        </button>
                        <button className="contact"
                            onClick={() => sendMail()}
                        >
                            <i className="fa-regular fa-envelope large-text"></i>
                            <p className="half-size-text">matt@msm.codes</p>
                        </button>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <InstagramEmbed url="https://www.instagram.com/mmp_photos/" width={328}/>
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