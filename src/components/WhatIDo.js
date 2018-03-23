import React, { Component } from 'react';
import '../assets/styles/WhatIDo.css';
import { Row, Col } from 'react-bootstrap';
// import fullStackIcon from '../assets/images/Full Stack.svg';
// import dataAnalystIcon from '../assets/images/Data Analyst.svg';

class WhatIDo extends Component {
    render() {
        return (
            <div className="WhatIDo">
                <div className="backgroundImageContainer">
                    <p className="header">WHAT I DO</p>
                    <hr />
                    <Row className="iconRow">
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <img alt="Full Stack Developer" className="WhatIDoIcon" src='./assets/images/Full Stack.svg'/>
                            <p className="iconTitle left">FULL STACK DEVELOPER</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} style={{marginTop: (this.props.bootstrapBreakpoint === 'xs') ? '35px' : 0}}>
                            <img alt="Data Analyst" className="WhatIDoIcon" src='./assets/images/Data Analyst.svg'/>
                            <p className="iconTitle right">DATA ANALYST</p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default WhatIDo;