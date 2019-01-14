import React, { Component } from 'react';
import '../assets/styles/Bio.css';
import { Row, Col } from 'react-bootstrap';

class Bio extends Component {
    render() {
        return (
            <div className="Bio"/* style={{marginTop: (this.props.bootstrapBreakpoint === 'xs') ? '-50px' : '-100px'}}*/>

                <div style={{ height: 0 }}>
                    <p className="backgroundText1">WELCOME</p>
                </div>
                <div style={{ height: 0 }}>
                    <p className="backgroundText2">WELCOME</p>
                </div>
                {/* <div className="headshotContainer" /> */}
                <p className="header">ABOUT ME</p>
                <hr />
                <Row>
                    <Col style={{ top: (this.props.bootstrapBreakpoint === 'xs') ? 0 : '-75px', padding: '20px' }} xs={12} sm={12} md={4} lg={4}>
                        <div className="headshotContainer" />
                        {/* <div style={{ maxWidth: '300px', height: '400px', backgroundColor: '#495262', margin: '0 auto'}}></div> */}
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <p className="aboutMeText">
                            My name is Justin Pritchard, I am 23 years old. I have within me a deep desire to
                            build and create. My skills are broad: front end to back end, user interfaces to data analytics.
                            I enjoy every aspect of a project and building web-sites and mobile apps from start to finish. I
                            love to develop professional applications for digital platforms using the best practices and technology
                            available. Each project is rooted in the desire to change lives while also providing and analyzing
                            data to inform smarter business decisions.
                        </p>
                    </Col>
                </Row>
                <p className="header">MY FAMILY</p>
                <hr />
                <Row>
                    <Col style={{ top: (this.props.bootstrapBreakpoint === 'xs') ? 0 : '-75px', padding: '20px' }} xs={12} sm={12} md={4} lg={4}>
                        <div className="myFamilyContainer" />
                        {/* <div style={{ maxWidth: '300px', height: '400px', backgroundColor: '#495262', margin: '0 auto'}}></div> */}
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <p className="aboutMeText">
                            On September 22, 2018 I married my best friend Charity. We met in 2016 at Liberty University and instantly became great friends.
                            I have never met a person so sweet, beautiful, and kind. She is my greatest supporter, encourager, and adventure partner. We love
                            coffee, fishing, hiking, farming, and spending time in the mountains. There is no other person I would want to spend the rest of my life with!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ top: (this.props.bootstrapBreakpoint === 'xs') ? 0 : '-75px', padding: '20px' }} xs={12} sm={12} md={4} lg={4}>
                        <div className="kylieContainer" />
                        {/* <div style={{ maxWidth: '300px', height: '400px', backgroundColor: '#495262', margin: '0 auto'}}></div> */}
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <p className="aboutMeText">
                            On January 1st, 2019 our family was joined by our first dog Kylie! She is a Great Pyrenees and will be joining us
                            on all of our adventures from here on out.
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Bio;