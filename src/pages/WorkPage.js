// IMPORTS //
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRef, useState } from 'react';
import { workMain, workDeveloper, workMarketer, workHumor } from '../components/WorkCategories';

const helmetContext = {};

// SET UP WORK PAGE FOR MSM CREATIVE WEBSITE //
const WorkPage = () => {
    
    // DEFINE VARIABLES FOR USE ON THE PAGE //
    const developerButton = useRef(null);
    const marketerButton = useRef(null);
    const humorButton = useRef(null);
    const [ rightColumnContent, setRightColumnContent ] = useState(workMain());
    const [ developerStyle, setDeveloperStyle ] = useState();
    const [ marketerStyle, setMarketerStyle ] = useState();
    const [ humorStyle, setHumorStyle ] = useState();

    // SET FUNCTIONS TO LOAD RIGHT COLUMN OPTIONS //
    const workCategories = (type) => {
        let workType = type;
        switch(workType) {
            case "developer":
                setRightColumnContent(workDeveloper());
                developerButton.current.style.color =  "orange";
                console.log(developerButton);
                break;
            case "marketer":
                setRightColumnContent(workMarketer());
                break;
            case "humor":
                setRightColumnContent(workHumor());
                break;
            default:
                setRightColumnContent(workMain());
        }
        console.log('workCategories has executed');
    };

    return(
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>Work | Matthew Mayer</title>
        </Helmet>
        <Container className="inner-container">
            <Row style={{backgroundColor: "none"}}>
                    <Col sm={12} md={6} className ="order-sm-1 order-md-2" style={{background: "#f0f1f4", overflow: "hidden"}}>
                        {rightColumnContent}
                    </Col>
                <Col sm={12} md={3} className ="order-sm-2 order-md-1">
                    <div className="work-buttons">
                        <button id="work-developer"
                            ref={developerButton}
                            onMouseEnter={() => setDeveloperStyle({fontStyle: "italic", color: "#43598a"})}
                            onMouseLeave={() => setDeveloperStyle({fontStyle: "normal"})}
                            style={developerStyle}
                            onClick = {() => workCategories("developer")}
                            >
                            Developer
                        </button>
                        <button id="work-marketer"
                            ref={marketerButton}
                            onMouseEnter={() => setMarketerStyle({fontStyle: "italic", color: "#43598a"})}
                            onMouseLeave={() => setMarketerStyle({fontStyle: "normal"})}
                            style={marketerStyle}
                            //onClick = {() => getID("marketer")}
                            >
                            Marketer
                        </button>
                        <button type="button" id="work-humor"
                            ref={humorButton}
                            onMouseEnter={() => setHumorStyle({fontStyle: "italic", color: "#43598a"})}
                            onMouseLeave={() => setHumorStyle({fontStyle: "normal"})}
                            style={humorStyle}
                            //onClick = {() => getID("Humor")}
                            >
                            Writer
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
        </HelmetProvider>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default WorkPage;