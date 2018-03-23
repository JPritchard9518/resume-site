import React, { Component } from 'react';
import '../assets/styles/Hobbies.css';
import { Row, Col } from 'react-bootstrap';

class Hobbies extends Component {
    render() {
        return (
            <div className="Hobbies">
                {/* <img alt='mountainBackground' className="backgroundImage" src='./assets/images/michal-parzuchowski-37537-unsplash.jpg'/> */}
                <div className="backgroundImageContainer">
                    
                
                    <p className="header">Hobbies</p>
                    <hr />
                    <div className="iconsContainer">
                        <Row className="iconRow">
                            <Col className="columnRow" xs={12} sm={12} md={4} lg={4}>
                                <div className="hobbyContainer fishing">
                                    {/* <img alt="Fishing" className="hobbyIcon" src='./assets/images/icons/hook_icon-01.svg' /> */}
                                    <div className="iconContainer">
                                        <img alt="Fishing" className="hobbyIcon" src='./assets/images/icons/hook_icon-01.svg' />
                                    </div>
                                    <p className="iconTitle left">Fly-Fishing</p>
                                </div>
                                <div className="hobbyContainer secondRow traveling">
                                    {/* <img alt="Traveling" className="hobbyIcon" src='./assets/images/icons/compas_icon-01.svg' /> */}
                                    <div className="iconContainer">
                                        <img alt="Traveling" className="hobbyIcon" src='./assets/images/icons/compas_icon-01.svg' />
                                    </div>
                                    <p className="iconTitle left">Traveling</p>
                                </div>
                            </Col>
                            <Col className="columnRow" xs={12} sm={12} md={4} lg={4}>
                                <div className="hobbyContainer camping">
                                    {/* <img alt="Camping" className="hobbyIcon" src='./assets/images/icons/tent_icon-01.svg' /> */}
                                    <div className="iconContainer">
                                        <img alt="Camping" className="hobbyIcon" src='./assets/images/icons/tent_icon-01.svg' />
                                    </div>
                                    <p className="iconTitle left">Camping</p>
                                </div>
                                <div className="hobbyContainer secondRow backpacking">
                                    {/* <img alt="Backpacking" className="hobbyIcon" src='./assets/images/icons/backpack_icon-01.svg' /> */}
                                    <div className="iconContainer">
                                        <img alt="Backpacking" className="hobbyIcon" src='./assets/images/icons/backpack_icon-01.svg' />
                                    </div>
                                    <p className="iconTitle left">Backpacking</p>
                                </div>
                            </Col>
                            <Col className="columnRow" xs={12} sm={12} md={4} lg={4}>
                                <div className="hobbyContainer reading">
                                    {/* <img alt="Reading" className="hobbyIcon" src='./assets/images/icons/book_icon-01.svg' /> */}
                                    <div className="iconContainer">
                                        <img alt="Reading" className="hobbyIcon" src='./assets/images/icons/book_icon-01.svg' />
                                    </div>
                                    <p className="iconTitle left">Reading</p>
                                </div>
                                <div className="hobbyContainer secondRow woodWorking">
                                    {/* <img alt="Wood Working" className="hobbyIcon" src='./assets/images/icons/hammer_icon-01.svg' /> */}
                                    <div className="iconContainer">
                                        <img alt="Wood Working" className="hobbyIcon" src='./assets/images/icons/hammer_icon-01.svg' />
                                    </div>
                                    <p className="iconTitle left">Wood Working</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hobbies;