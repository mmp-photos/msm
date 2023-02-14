// IMPORTS //
import React from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import parse from 'html-react-parser';
import dinoPhoto   from  '../assets/images/matt_dino.png';
import tim_curry   from  '../assets/images/tim_curry.jpg';
import infj        from  '../assets/images/infj.svg';
import libra       from  '../assets/images/libra.svg';
import HufflePuff  from  '../assets/images/hufflepuff.png';

const helmetContext = {};

// SET UP ABOUT PAGE FOR MSM CREATIVE WEBSITE //
const AboutPage = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    console.log(loginModalOpen);
    let [content, updateContent] = useState({});

    const TldrModalMBTI = () => {
        setLoginModalOpen(true);
        let text = {
                title: 'Myers Briggs Type Indicator',
                text:'This is the content for the INFJ modal.',
                image: libra};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalZodiac = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Libra',
            text:'<p>The seventh sign of the zodiac Libra is represented by a set of scales.  Life for Libras is all about balance. </p> <p>My first boss once described me with a gesture, his hand sweeping in a smooth, straight line.  "The keel of the ship" is what he called me.  Smooth sailing, tranquil and balanced.</p>',
            image: libra};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalPuff = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Hufflepuff House',
            text:"<p>It's a popluar belief that Hufflepuffs have somehow failed to show courage, cleverness, or cunning. Hufflepuffs know better!</p><p> The Sorting Hat doesn't look for a lack of traits.  Puffs are as daring, ambitious, and bright as their classmates.  But their DEFINING trait is fundamental fairness.  It's hard work and a commitment to treat everyone equally that mark badgers.  Hufflepuff is also the most inclusive of the Hogwarts Houses.  They won't turn away anyone who shares their inherent decency.</p>",
            image: HufflePuff};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalTim = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Tim Curry Test',
            text:'<p>Knowing what movie someone recognizes Tim Curry from tells you a lot about them.  I will relieve the antici...</p> <p>...</p> <p>... pation and tell you that I will always think of Tim Curry as the butler from Clue. If I am being honest I probably first saw him as the devil in Legend.  But the character design really removed the opportunity to recognize him in other roles.</p> <p>I <span class="text-italics">wish</span> I was cool enough to say that it was Rocky Horror Picture Show where I discovered him.  However Frank-n-Furter was well into my future when I helped my classmates at Collins Living Learning Center put on a production in our dining hall.</p>',
            image: tim_curry};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    return(
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>Aboout Me | Matthew Mayer</title>
        </Helmet>
            <Container className="inner-container">
                <Row>
                    <Col id="right-column" sm={12} md={6} className ="order-sm-1 order-md-2">
                        <Row>
                            <h1 className="serif-">Matthew Mayer</h1>
                            <Col>
                                <div>
                                    <img id="interior-photo-primary" src={dinoPhoto} alt='matt petting a dinosaur' />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <h4>TLDR <span className="d-md-none d-inline"><i className="fa-regular fa-circle-right" style={{fontSize: "1.75rem"}}></i></span></h4>
                                    <Col className="d-md-block d-none" style={{paddingLeft: 30}}>
                                    <div id='libra' className="tldr-icon d-flex align-items-center justify-content-center" onClick={onClick => TldrModalZodiac()}>
                                        <img src={libra} className='tldr-image' alt='Libra scales'/><br />
                                    </div>
                                    <div  id='infj' className="tldr-icon d-flex align-items-center justify-content-center" onClick={onClick => TldrModalMBTI()}>
                                        <img src={infj} className='tldr-image' alt='Myers Briggs Type Indicator INFJ'/><br />
                                    </div>
                                    <div id='hufflepuff' className="tldr-icon d-flex align-items-center justify-content-center" onClick={onClick => TldrModalPuff()}>
                                        <img src={HufflePuff} className='tldr-image' alt='Hufflepuff House Crest'/><br />
                                    </div>
                                    <div id='timCurry'  className="tldr-icon d-flex align-items-center justify-content-center" onClick={onClick => TldrModalTim()}>
                                        <img src={tim_curry} className='tldr-image' alt='Tim Curry from Clue'/><br />
                                    </div>
                                    </Col>
                        </Row>
                    </Col>
                    <Col id="left-column-text" sm={12} md={6} className ="order-sm-2 order-md-1">
                        <h3 className="sans uppercase flush-right margin-2y">I'm Matt <br/>a Front End Web Developer,<br/> client communications specialist,<br/> and patterned shirt afficiando.</h3>
                        <h2>Who, What, Where?</h2>
                            <p className="about">If those sound like the questions of a journalist that's not far off.  Newspapers, magazines and print publicaations were my first love. I spent most of my waking hours in the offices of various campus publications, most notably the <a href="https://www.idsnews.com/" target="new">Indiana Daily Student</a>.</p>
                            <p className="about">My name is Matthew Mayer.  I've spent my life in publishing and communications.  From my earliest days at the <a href="https://www.idsnews.com">Indiana Daily Student</a> where I worked on the photography, advertising, and editorial staffs to my professional career converting Dummies Guides to eBooks for the earliest versions of the Kindle, I have loved every minute of my time working in communications.</p>
                        <h2>Everything Old...</h2>
                            <p className="about">Don't let my fondness for film cameras and manual typewriters fool you.  I am up-to-date on the current technologies and excel at helping clients implement them.</p>
                        <p className="about">Don't let my fondness for film cameras and manual typewriters fool you.  I am up-to-date on the current technologies and excel at helping clients implement them.</p>
                        <p className="about">Don't let my fondness for film cameras and manual typewriters fool you.  I am up-to-date on the current technologies and excel at helping clients implement them.</p>
                        <h2>Experience</h2>
                        <p className="about">Don't let my fondness for film cameras and manual typewriters fool you.  I am up-to-date on the current technologies and excel at helping clients implement them.</p>
                            <ul>
                                <li>20 years Customer Service and Technical Support</li>
                                <li>5 years website and ebook design and coding</li>
                                <li>5 year graphic design and publication production</li>
                            </ul>
                        <h2>Skills</h2>
                        <p>UI/UX Design / Strategy / Product Management / User Research / Agile Methodologies / Collaboration / Design Sprints / Design Systems / HTML and CSS / CMS Design & Architecture / Webflow Development / Framer Development / Photography / Graphic Design</p>
                        <h2>Pro Bono and Personal Projects</h2>
                        <ul>
                                <li><span className="bold">Website Designer</span> &ndash; Great Schools for America: a not-for-profit educational organization</li>
                                <li><span className="bold">Website Designer</span> &ndash; Pull Up a Chair Indy: a local story-telling series</li>
                                <li><span className="bold">Marketing Director</span> &ndash; Circle City Aerodrome: the Indianapolis Steampunk Society</li>
                                <li><span className="bold">Producer/Marketing Director</span> &ndash; MK Productions: putting on independent theatre productions in Indianapolis</li>
                            </ul>
                    </Col>
                </Row>
        </Container>

    <Modal className="about-modal" isOpen={loginModalOpen}>
    <ModalHeader className="about-modal-header" toggle={() => setLoginModalOpen(false)} >
        <span className="h2-modal">{content.title}</span>
    </ModalHeader>

    <ModalBody>
        <img className="modal-image" src={content.image} alt='from the modal' />
        {parse('<div>' + content.text + '</div>')}
    </ModalBody>font
    </Modal>
    </HelmetProvider>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default AboutPage;