// IMPORTS //
import React from 'react';
import { Container, Row, Col, Modal } from 'reactstrap';
import { useState, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import parse from 'html-react-parser';
import dinoPhoto      from  '../assets/images/matt_dino.png';
import tim_curry      from  '../assets/images/tim_curry.png';
import tim_curry2     from  '../assets/images/tim_curry2.png';
import infj           from  '../assets/images/infj.svg';
import infj2          from  '../assets/images/mandela.jpg';
import libra          from  '../assets/images/libra.svg';
import libra2         from  '../assets/images/libra_modal_open.png';
import HufflePuff     from  '../assets/images/hufflepuff.png';
import HufflePuff2    from  '../assets/images/hufflepuff2.png';

const helmetContext = {};

// SET UP ABOUT PAGE FOR MSM CREATIVE WEBSITE //
const AboutPage = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    let [content, updateContent] = useState({});
    const [ tldrOpen, settldrOpen ] = useState(false);


    const TldrModalMBTI = () => {
        setLoginModalOpen(true);
        let text = {
                title: 'MBTI - INFJ',
                text:`<p>Ahhh... Myers-Briggs Type Indicator... the zodiac according to HR managers.  So many jobs will require some sort of personality test upon starting.  I don't need to be tested... again. I will tell you right up front that I am an INFJ.  We are said to be the rarest of the MBTI designations.  But of all the types we are probably the proudest of our INJFness.</p>
                <p>If you believe the popular characterization of introverts, that might be the only thing we ever tell you.  That might be because the examples provided of the  Ur-INFJs are always Dr. Martin Luther King, Jr. and Nelson Mandela.  If you were expected to live up to their legacies, you might keep quiet too.</p>`,
                image: infj2,
                artCredit: 'Daniel Arrhakis',
                artLink: 'https://www.flickr.com/photos/arrhakis/'
            };
        updateContent(text);
        //console.log(content);
        //console.log('The modal should be open');
    } 

    const TldrModalZodiac = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Libra',
            text:'<p>The seventh sign of the zodiac Libra is represented by a set of scales.  Life for Libras is all about balance. </p> <p>My first boss once described me with a gesture, his hand sweeping in a smooth, straight line.  "The keel of the ship" is what he called me.  Smooth sailing, tranquil and balanced.</p>',
            image: libra2,
            artCredit: 'Wellcome Library, London',
            artLink: 'https://web.archive.org/web/20150815054440/http://www.wellcome.ac.uk/News/Media-office/Press-releases/2014/WTP055466.htm'
            };
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalPuff = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Hufflepuff House',
            text:"<p>It's a popluar belief among Harry Potter fans that Hufflepuffs have somehow failed to show courage, cleverness, or cunning. But true Hufflepuffs know better!</p><p> The Sorting Hat doesn't look for a lack of traits.  Puffs are as daring, ambitious, and bright as their classmates.  But their <span className='italic'>defining</span> trait is fundamental fairness.  Hard work and a commitment to treat everyone equally are what give badgers their stripes.  Hufflepuff is also the most inclusive of the Hogwarts Houses.  They won't turn away anyone who shares their inherent decency.</p><p>There will never be a more faithful friend than a HufflePuff.  They will ALWAYS be on your side &mdash; when you're right.</p>",
            image: HufflePuff2,
            artCredit: 'ChromoManiac',
            artLink: 'https://www.pxfuel.com/en/desktop-wallpaper-fxqmc'
            }
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalTim = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'The Tim Curry Test',
            text:'<p>Knowing what movie someone recognizes Tim Curry from tells you a lot about them.  I will relieve the antici...</p> <p>...</p> <p>... pation and tell you that I will always think of Tim Curry as the butler from <span className="italic">Clue</span>. If I am being honest I probably first saw him as the devil in <span className="italic">Legend</span>.  But the character design really removed the opportunity to recognize him in other roles.</p> <p>I <span class="text-italics">wish</span> I were cool enough to say that it was <span className="italic">Rocky Horror Picture Show</span> where I discovered him.  However Frank-n-Furter was well into my future while growing up in small town Indiana.  It wasn\'t until college when I helped my dorm-mates put on a production in our dining hall that I first saw this camp classic.</p>',
            image: tim_curry2,
            artCredit: 'Thomas Autumn',
            artLink: 'https://www.flickr.com/photos/29457092@N07/'
            };
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    }

    const tldrContent = useRef('');
    const tldrIcon = useRef('');

    const showTLDR = () => {
        if(!tldrOpen){
            tldrContent.current.className = "d-flex"
            tldrIcon.current.className = "fa-solid fa-angle-down"
        }
        else {
            tldrContent.current.className = "d-none"
            tldrIcon.current.className = "fa-solid fa-angle-right"
        };
        settldrOpen(!tldrOpen);
    };
    //console.log('tldr Content is ' + tldrContent.current.className);
    //console.log(tldrIcon.current.id);

    return(
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
                        <Row style={{marginLeft: "12px"}}>
                            <h4 className="italic">TL:DR <span className="d-inline d-md-none"><i ref={tldrIcon} className="fa-solid fa-angle-right" onClick = {() => showTLDR()}></i></span></h4>
                                    <div ref={tldrContent} className="d-none d-md-flex">
                                    <div id='libra' className="tldr-icon" >
                                        <img src={libra} className='tldr-image' onClick={onClick => TldrModalZodiac()} alt='Libra scales'/>
                                    </div>
                                    <div  id='infj' className="tldr-icon" onClick={onClick => TldrModalMBTI()}>
                                        <img src={infj} className='tldr-image' alt='Myers Briggs Type Indicator INFJ'/><br />
                                    </div>
                                    <div id='hufflepuff' className="tldr-icon" onClick={onClick => TldrModalPuff()}>
                                        <img src={HufflePuff} className='tldr-image' alt='Hufflepuff House Crest'/><br />
                                    </div>
                                    <div id='timCurry'  className="tldr-icon" onClick={onClick => TldrModalTim()}>
                                        <img src={tim_curry} className='tldr-image' alt='Tim Curry from Clue'/><br />
                                    </div>
                                    </div>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} className ="order-sm-2 order-md-1">
                        <article>
                            <h1 className="serif italic flush-right margin-2y" style={{marginBottom: "12px"}}>Hi, I'm Matt!</h1>
                            <h3 className="flush-right">I'm a Frontend Web Developer, <br />
                                Client Communications Specialist,<br/> 
                                and Patterned-Shirt Afficiando.</h3>

                            <h2 className="italic">Who, What, Where and most importantly Why?</h2>
                                <p>If those sound like the questions of a journalist that's not far off.  Newspapers, magazines, and print publications were my first love. In school I spent most of my waking (and ocassionally a few sleeping) hours in the offices of various campus publications. Most notably among them was the <a href="https://www.idsnews.com/" target="new">Indiana Daily Student</a>, where I was once a staff photographer, photo editor, and member of the ad staff.</p>

                                <p>As you might expect from the mention of the <span className="italic">IDS</span> I was born in Indiana.  More shockingly &mdash; I still live there.  People have asked why I stayed in Indianapolis, which has always had a reputation as a boring, sleepy city.  I always answered, "Somebody has to stay here and change it." To my amazement we actually have! There is always something to do now.</p>

                                <p>I'm glad that opportunities for remote work are increasing.  It gives me the chance to do the work I enjoy from the place I've come to love.</p>

                            <h2 className="italic">For fun...</h2>
                                <p className="about">Fun and funny are things that I take seriously.  Make me laugh and you'll make a new friend.  It's as easy as that.</p>
                                <p>My spouse Mary is a technical writer and author - writing comedies that crack me up.  She is a board member of the Indiana Writer's Center, and writes plays for the summer Fringe Fest.  We have so much fun producing and promoting her shows.  The biggest hit so far has been <span className="italic">Small Gods, Big Problems</span> which tells the story of the God of Small Pleasures potentially losing his job after his duties are all reassigned to Self Care.</p>
                                <p>My best friend, as you might expect of any man, is my dog Henry.  He is an Australian Shepherd/Collie mix - nearly as hilarious as he is handsome  .  Usually I just describe him as an Aussie.  Owners of Aussies are seen as ambitious and enjoying a challenge.  Collie owners are typically thought to be trapped at the bottom of a well.</p>
                                <p>Most of my PEOPLE friends are involved in the art or theatre communities in Indianapolis.  There's always a show or gallery opening to go to. I love celebrating their successes, but I secretly remember the days that I didn't need to buy a ticket just to see them.</p>
                                <p>My other (somewhat) overlapping group of friends are people whom met I through work. Mostly those are people from the Apple Store.  They are my type of people.  In fact I fit in so well that I blend in at the store.  It is the only place Mary has ever had a problem spotting me in a crowd.</p>

                            <h2  className="italic">Experience</h2>
                                <p>I was working on websites when the most creative layout options were done with tables, and I've worked on publications when paste-up was done with actual paste.</p>
                                <p>As publishing jobs were automated or moved out of the Midwest I turned to my communications skills.  I have two decades of experience in Customer Service and Technical Support.  I have excellent written and verbal communication skills and my troubleshooting abilities are second to none.
                                </p>
                                <ul>
                                    <li>20 years Customer Service and Technical Support</li>
                                    <li>5 years website and ebook design and coding</li>
                                    <li>5 years graphic design and publication production</li>
                                </ul>
                            <h2 className="italic">Skills</h2>
                            <p>UI/UX Design | Collaboration | React App Development | HTML and CSS | Bootstrap | Adobe Creative Suite | Humor Writing | Development Editor | Website Content Creation | Photography | Graphic Design</p>
                            <h2 className="italic">Pro Bono and Personal Projects</h2>
                            <ul>
                                    <li><span className="bold">Website Designer</span> &ndash; Great Schools for America: a not-for-profit educational organization</li>
                                    <li><span className="bold">Website Designer</span> &ndash; Pull Up a Chair Indy: a local story-telling series</li>
                                    <li><span className="bold">Marketing Director</span> &ndash; Circle City Aerodrome: the Indianapolis Steampunk Society</li>
                                    <li><span className="bold">Producer/Marketing Director</span> &ndash; MK Productions: putting on independent theatre productions in Indianapolis</li>
                                </ul>
                        </article>
                    </Col>
                </Row>
            </Container>
            </main>

    <Modal className="about2-modal" 
        isOpen={loginModalOpen}>
        <img className="modal-image" src={content.image} alt='from the modal' />
            <i className="modal-close fa-solid fa-square-xmark" onClick = {() => setLoginModalOpen()}></i>
        {content.artCredit != '' ? <p className="modal-art-credit">Credit: <a href={content.artLink} target="new">{content.artCredit}</a></p> : null}
        <div className="modal-text-padding">
            <h1>{content.title}</h1>
            {parse('<div>' + content.text  + '</div>')}
        </div>
    </Modal>
    </HelmetProvider>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default AboutPage;