import React from 'react';
import { selectAllPortfolioItems } from './portfolioSlice';
import { useSelector } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const DisplayCard = () => {

    const portfolioArray = useSelector(selectAllPortfolioItems);

    const portfolioItems = portfolioArray.map((item) => {
        return (
            <Link to={'/portfolio/' + item.id}>
                <Col lg="4" key={ item.id } style={{display: "inline-block", backgroundColor: "green"}}>
                    <img className="portfolio-thumbs-image"
                        src={item.image}
                        alt={item.title}
                    />
                </Col>
            </Link>
        )
    });

    return (
        <Col lg="3">
            <div style={{backgroundColor: "white"}}>
                <Nav tabs>
                    <NavItem>
                        <NavLink className="active">
                            marketing
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            writing
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent style={{backgroundColor: "white"}}>
                    <TabPane className="active">
                        <Row>
                            <Col>
                                {portfolioItems}
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </Col>
    )
}

export default DisplayCard;