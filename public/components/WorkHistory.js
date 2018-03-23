import React, { Component } from 'react';
import '../assets/styles/WorkHistory.css';
// import colors from '../styles/colors.js';
import { Row, Col } from 'react-flexbox-grid';

class WorkHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            leftColClass: '',
            workRowClass: '',
        }
    }
    componentWillReceiveProps(){
        var leftColClass = '';
        var workRowClass = '';
        if (['sm','md', 'lg'].indexOf(this.props.bootstrapBreakpoint) > -1) {
            leftColClass = "column left";
        }else{
            leftColClass = "column right"
        }
        if(['md','lg'].indexOf(this.props.bootstrapBreakpoint) > -1){
            workRowClass = "workRow"
        }else{
            workRowClass = "workRowSmall"
        }
        this.setState({leftColClass:leftColClass, workRowClass: workRowClass})
    }
    render() {
        return (
            <div className="WorkHistory">
                <div style={{height: 0}}>
                    <p className="backgroundText">WORK HISTORY</p>
                </div>
                <p className="header">Work History</p>
                <hr />
                <Row className={this.state.workRowClass}>
                    <Col className={this.state.leftColClass} xs={12} sm={12} md={6} lg={6}>
                        <p className="workName">American Center for Law and Justice (ACLJ)</p>
                        <p className="workLocation">Nashville, TN</p>
                        <p className="workTimeFrame">2015 - Current</p>
                    </Col>
                    <Col className="column right" xs={12} sm={12} md={6} lg={6}>
                        <p className="jobTitle">Web Development Intern</p>
                        <p className="description">I have spent 3 years with the ACLJ working with their developers developing web and mobile applications. I spend summers in their Nashville office, and work mobile during the school years.</p>
                    </Col>
                </Row>
                <p className="header" style={{marginTop: '30px'}}>Projects</p>
                <hr />
                <div style={{maxWidth: '800px', margin: '0 auto', paddingTop: '30px'}}>
                    <Row className="projectRow">
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile"></div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile"></div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile"></div>
                        </Col>
                    </Row>
                    <Row style={(['sm','md','lg'].indexOf(this.props.bootstrapBreakpoint) > -1) ? {padding: '0 135px'} : {}} className="projectRow">
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div className="projectTile"></div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div className="projectTile"></div>
                        </Col>
                    </Row>
                </div>
                
            </div>

        );
    }
}

export default WorkHistory;