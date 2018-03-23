import React, { Component } from 'react';
import '../assets/styles/Education.css';
import { Row, Col } from 'react-flexbox-grid';
const courses = ['advanced programming','computer architecture and organization','theory of programming languages','server-side programming','calculus with matlab','algorithms and data structures','database system concepts','operating systems','studies in information security','introduction to statistical analysis','introduction to linux','network architecture and protocol','modern cryptography','calculus 1 & 2','linear algebra','discrete mathematics','software engineering']
class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftColClass: '',
            rightColClass: '',
            workRowClass: '',
        }
    }
    componentWillReceiveProps() {
        var leftColClass = '';
        var rightColClass = '';
        var workRowClass = '';
        if (['sm','md','lg'].indexOf(this.props.bootstrapBreakpoint) > -1) {
            leftColClass = "column left";
            rightColClass = 'column right'
        } else {
            leftColClass = "column right centerText"
            rightColClass = 'column right centerText'
        }
        if (['sm','md','lg'].indexOf(this.props.bootstrapBreakpoint) > -1) {
            workRowClass = "workRow"
        } else {
            workRowClass = "workRowSmall"
        }
        this.setState({ leftColClass: leftColClass, rightColClass: rightColClass, workRowClass: workRowClass })
    }
    render() {
        var i = 0;
        return (
            <div className="Education">
                <div style={{ height: 0 }}>
                    <p className="backgroundText">EDUCATION</p>
                </div>
                <p className="header">Education</p>
                <hr />
                <Row className={this.state.workRowClass}>
                    <Col className={this.state.leftColClass} xs={12} sm={6} md={6} lg={6}>
                        <p className="school">Liberty University</p>
                        <p className="school">Bachelor of Science</p>
                        <p className="schoolLocation">Lynchburg, Virginia</p>
                    </Col>
                    <Col className={this.state.rightColClass} xs={12} sm={6} md={6} lg={6}>
                        <p className="graduation">Computer Science</p>
                        <p className="graduation">Expected Graduation:</p>
                        <p className="graduation">MAY 2018</p>
                    </Col>
                </Row>
                <Row className={this.state.workRowClass}>
                    <Col className={this.state.leftColClass} xs={12} sm={6} md={6} lg={6}>
                        <p className="school">Scottsbluff Senior High School</p>
                        <p className="schoolLocation">Scottsbluff, Nebraska</p>
                    </Col>
                    <Col className={this.state.rightColClass} xs={12} sm={6} md={6} lg={6}>
                        <p className="graduation">Class of 2013</p>
                    </Col>
                </Row>
                <p className="header">Relevant Courses</p>
                <hr />
                <div className="courseContainer">
                    
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div key={courses[i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div key={courses[++i]} className="courseTile">
                                <div className="courseText">{courses[i]}</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default Education;