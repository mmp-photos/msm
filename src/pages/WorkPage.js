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

    // SET FUNCTIONS TO LOAD RIGHT COLUMN OPTIONS //
    const workCategories = (type) => {
        let workType = type;
        switch(workType) {
            case "developer":
                setRightColumnContent(workDeveloper());
                //console.log(developerButton);
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
        //console.log('workCategories has executed');
    };

    return(
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>Work | Matthew Mayer</title>
        </Helmet>
        <main>
        <Container fluid>
            <Row>
                <Col sm={12} md={4} className="order-sm-1 order-md-2" style={{overflow: "hidden"}}>
                    {rightColumnContent}
                </Col>
                <Col sm={12} md={4} className="work-buttons-box">
                    <button className="work-buttons"
                        ref={developerButton}
                        onClick = {() => workCategories("developer")}
                        >
                        Developer
                    </button>
                    <button className="work-buttons"
                        ref={marketerButton}
                        onClick = {() => workCategories("marketer")}
                        >
                        Marketer
                    </button>
                    <button className="work-buttons"
                        ref={humorButton}
                        onClick = {() => workCategories("humor")}
                        >
                        Content
                    </button>
                </Col>
            </Row>
        </Container>
        </main>
        </HelmetProvider>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default WorkPage;