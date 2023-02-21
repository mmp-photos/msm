// IMPORTS //
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRef, useState, useParams } from 'react';
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
                developerButton.current.className =  "buttons";
                window.history.pushState({id: 100},"Developer", "/work#developer");
                //console.log(developerButton);
                break;
            case "marketer":
                setRightColumnContent(workMarketer());
                window.history.pushState({id: 100},"Marketer", "/work#marketer");
                break;
            case "humor":
                setRightColumnContent(workHumor());
                window.history.pushState({id: 100},"Content", "/work#content");
                break;
            default:
                setRightColumnContent(workMain());
        }
        //console.log('workCategories has executed');
    };

    return(
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>Work | Matthew Mayer</title>
        </Helmet>
        <Container className="inner-container">
            <Row>
                    <Col sm={12} md={6} className ="order-sm-1 order-md-2" style={{overflow: "hidden"}}>
                        {rightColumnContent}
                    </Col>
                <Col sm={12} md={3} className ="order-sm-2 order-md-1">
                    <div className="work-buttons">
                        <button id="work-developer"
                            ref={developerButton}
                            style={developerStyle}
                            onClick = {() => workCategories("developer")}
                            >
                            Developer
                        </button>
                        <button id="work-marketer"
                            ref={marketerButton}
                            style={marketerStyle}
                            onClick = {() => workCategories("marketer")}
                            >
                            Marketer
                        </button>
                        <button type="button" id="work-humor"
                            ref={humorButton}
                            style={humorStyle}
                            onClick = {() => workCategories("humor")}
                            >
                            Content
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