// IMPORTS //
import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import heroImage from '../assets/images/hero_image.svg';
import mattHomepage from '../assets/images/mattHomepage.png';
import swirl from '../assets/images/mattHomepage_swirl.png';
import swirlFaster from '../assets/images/mattHomepage_swirl_faster.png';
import swirlProhibitor from '../assets/images/mattHomepageProhibitory.png';
import { useState, useEffect, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import bg01 from '../assets/images/backgrounds/bg01.jpg';
import bg02 from '../assets/images/backgrounds/bg02.jpg';
import bg03 from '../assets/images/backgrounds/bg03.jpg';
import bg04 from '../assets/images/backgrounds/bg04.jpg';
import bg05 from '../assets/images/backgrounds/bg05.jpg';
import bg06 from '../assets/images/backgrounds/bg06.jpg';
import bg07 from '../assets/images/backgrounds/bg07.jpg';
import bg08 from '../assets/images/backgrounds/bg08.jpg';
import bg09 from '../assets/images/backgrounds/bg09.jpg';

const helmetContext = {};

// SET UP LANDING PAGE FOR MSM CREATIVE WEBSITE //
const HomePage = () => {

    const [ isStopped, setStop ]      = useState(false);
    const [ bgPattern, setBackground] = useState(bg04);
    const [ aboutStyle, setAboutStyle] = useState({});
    const [ workStyle, setWorkStyle] = useState({});
    const [ contactStyle, setContactStyle] = useState({});
    const [ count, setCount ] = useState(0);
    const [ prevCount, setPrevCount ] = useState(0);
    const [ firstRender, setFirstRender ] = useState(true);
    
    // Display welcome message
    //console.log("the state of firstRender is:", firstRender);
    const welcomeMessage = "Hello!  My name is Matthew and I'm a developer.  If you are seeing this message then you are looking at the console, seeing what may appear.  I confess that I had many messages appearing during development.  Most have been commented out once the functions I was troubleshooting were working properly.  Thanks for check.  Please let me know if there are any unexpected errors showing here!"
    if(firstRender){
        console.log(welcomeMessage)
        setFirstRender(false)
    } else {
        //console.log("the site has already been rendered")
    };

    // setBackground(newImage);
    const changeBackground = useEffect(() => {
        if(!isStopped){
            const intervalId = setInterval(() => {
                const bgImages = [bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08, bg09];
                let i = Math.floor(Math.random() * bgImages.length);
                let image = bgImages[i];
                setBackground(image);
            }, 1000);
            return () => {
            clearInterval(intervalId);
            };
        }
        else{
            console.log('isStopped is truthy: ', isStopped);
        }
    });
    
    //TOGGLE IMAGE BACKGROUND CHANGE//
    let stopStatus = isStopped;

    const stopSwitch = (state) => {
        stopStatus = (state ? false : true);
        return stopStatus;
    }
    
    stopSwitch(stopStatus);
    // console.log('Stopped status from line 31 after the stopSwitch function is: ', isStopped); –- Commented out after issue was resolved. //
    
    //SET HEIGHT OF MSM LOGO // 
    var clientWidth = window.innerWidth;
    clientWidth /= 2.14;
    const calcMaxHeight = Math.ceil(clientWidth) - 12;

    //SET UP LINKS AND STYLE CHANGES OF PRIMARY BUTTONS //
    const updateStyle = (style) => {
        switch(style){
            case "about":
                setAboutStyle({fontStyle: "italic"});
                break;
            case "work":
                setWorkStyle({fontStyle: "italic"});
                break;
            case "contact":
                setContactStyle({fontStyle: "italic"});
                break;
            default:
                console.log(`updateStyle value is default`);
        }
    };

    // SELECT ELEMENT BY ID //
    const profilePhoto = useRef('');
    const fullName     = useRef(null);
    //console.log(`Current count is ${count}`);
    
    function startSpinning() {
        let element = profilePhoto.current.className;

        if(count <= 1) {
            profilePhoto.current.src = swirl;
            profilePhoto.current.className = "profile-photo-rotate";

            setTimeout((element) => {
                profilePhoto.current.className = "profile-photo";
                console.log(`The spinning should have stopped`);
                profilePhoto.current.src = mattHomepage;

                if(count === 0){
                    fullName.current.innerHTML ="LOL that was fun!"
                }
                if(count === 1){
                    fullName.current.innerHTML ="I feel dizzy!"
                }
                else{
                    console.log("No text to update.");
                }
                setCount(count => count +1 );
            }, 1000);
        }
        else if(count > 1 && count <= 3) {
            profilePhoto.current.src = swirlFaster;
            profilePhoto.current.className = "profile-photo-rotate";

            setTimeout((element) => {
                profilePhoto.current.className = "profile-photo";
                console.log(`The spinning should have stopped`);
                profilePhoto.current.src = mattHomepage;

                if(count === 2){
                    fullName.current.innerHTML ="Enough,<br />thanks."
                }
                if(count === 3){
                    fullName.current.innerHTML ="That's not nice!"
                }
                else{
                    console.log("No text to update.");
                }
                setCount(count => count +1 );
            }, 700);
        }
        else if(count >=4) {
            profilePhoto.current.src = swirlProhibitor;
            profilePhoto.current.className = "profile-photo-rotate2";
            fullName.current.innerHTML ="Sorry,<br/>No more."


        } else {
            console.log(`Nope!  I'm already dizzy`);
    }
    };


    // RETURN THE CONTENT OF THE PAGE //
    return(
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>Matthew S Mayer</title>
        </Helmet>
        <Container className="inner-container">
            <Row>
                <Col sm={12} md={5} className ="order-sm-1 order-md-2">
                    <div id={'home-media'} style={{height: calcMaxHeight + 'px; overflow: hidden', backgroundImage:`url(${bgPattern})`}} onClick = {() => setStop(stopStatus)}>
                        <div style={{height: calcMaxHeight + 'px; overflow: hidden'}}>
                            <img id="msmImage" src={heroImage} 
                                 style={{width: '105%', cursor: "pointer", marginTop: "-12px"}} 
                                 alt='hero artwork' 
                            />
                        </div>
                    </div>
                    <div>
                        <img id={mattHomepage} ref={profilePhoto} src={mattHomepage}
                            style={{cursor: "pointer"}}
                             className="profile-photo" alt="Matthew Mayer" 
                             onClick = {() => startSpinning()}
                        />
                        <div>
                            <h2 className="sans normal" ref={fullName}>Matthew Mayer</h2>
                            <h3 className="sans">Developer, Marketer</h3>
                            <h3 className="sans">Humorist &amp; Hoosier</h3>
                        </div>
                    </div>
                </Col>        
                <Col sm={12} md={5} className ="order-sm-2 order-md-1">
                    <button id="home-work" 
                        onMouseEnter={() => updateStyle("work")}
                        onMouseLeave={() => setWorkStyle({fontStyle: "normal"})}
                        style={workStyle}>
                        <Link to="/work">Work.</Link>
                    </button>
                    <button id="home-about"
                        onMouseEnter={() => updateStyle("about")}
                        onMouseLeave={() => setAboutStyle({fontStyle: "normal"})}
                        style={aboutStyle}>
                        <Link to="/about">About.</Link>
                    </button>
                    <button type="button" id="home-contact"
                        onMouseEnter={() => updateStyle("contact")}
                        onMouseLeave={() => setContactStyle({fontStyle: "normal"})}
                        style={contactStyle}>
                        <Link to="/contact">Contact.</Link>
                    </button>
                </Col>
            </Row>
        </Container>
        </HelmetProvider>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default HomePage;