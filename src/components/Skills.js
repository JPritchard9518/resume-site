import React, { Component } from 'react';
import '../assets/styles/Skills.css';
// import colors from '../styles/colors.js';
import { Row, Col } from 'react-bootstrap';

var skills = [
    {
        name: 'javascript',
        score: 4
    },{
        name: 'html',
        score: 4
    },{
        name: 'css',
        score: 4
    },{
        name: 'pug',
        score: 4
    },{
        name: 'mongodb',
        score: 4
    },{
        name: 'node.js',
        score: 3.5
    },{
        name: 'react',
        score: 3.5
    },{
        name: 'react-native',
        score: 3.5
    },{
        name: 'express',
        score: 3.5
    },{
        name: 'git',
        score: 3.5
    },{
        name: 'google analytics',
        score: 3
    },{
        name: 'excel',
        score: 3
    }, {
        name: 'AWS',
        score: 2.5,
    }, {
        name: 'C++',
        score: 2.5
    },{
        name: 'Linux',
        score: 2
    },{
        name: 'salesforce',
        score: 2
    },{
        name: 'facebook api',
        score: 2
    }
]

class Skills extends Component {
    constructor(props){
        super(props);
        this.state={
            rowStylingLeft: {},
            rowStylingRight: {},
            skillNameColStyle: {},
            activeSkill: '',
            activeCircleStyling: {
                height: '17px',
                width: '17px',
            }
        }
        this.renderSkill = this.renderSkill.bind(this);
        this.getDots = this.getDots.bind(this);
        this.skillHoverEnter = this.skillHoverEnter.bind(this);
        this.skillHoverLeave = this.skillHoverLeave.bind(this);
    }
    componentWillReceiveProps(){
        var rowStylingLeft = {};
        var rowStylingRight = {};
        var skillNameColStyle = {};
        if(['md','lg'].indexOf(this.props.bootstrapBreakpoint) > -1){
            rowStylingLeft.width = '81%';
            rowStylingLeft.float = 'right';
            rowStylingRight.width = '81%';
            rowStylingRight.float = 'left';
            skillNameColStyle = { paddingLeft: '50px', textAlign: 'left' }
        }
        this.setState({rowStylingLeft:rowStylingLeft, rowStylingRight:rowStylingRight, skillNameColStyle: skillNameColStyle})
    }
    skillHoverEnter(skill) {
        this.setState({activeSkill:skill, activeCircleStyling: {width: '25px', height: '25px'}})
    }
    skillHoverLeave(skill){
        this.setState({activeSkill: '', activeCircleStyling: {}})
    }
    getDots(name, score){
        if(score > .5)
            return (<div className="circle full-circle"></div>)
        if(score === .5){
            return (<div className="halfCircleContainer">
                <div className="left"></div>
                <div className="right"></div>
            </div>)
        }
        return (<div className="circle empty-circle"></div>)
    }
    renderSkill(skill, side){
        var score = skill.score;
        return (<div key={skill.name} ref={skill.name} className="skillItemContainer" onMouseEnter={() => this.skillHoverEnter(skill.name)} onMouseLeave={() => this.skillHoverLeave(skill.name)}>
            <Row style={(side === 'left') ? this.state.rowStylingLeft : this.state.rowStylingRight}>
                        <Col style={this.state.skillNameColStyle} xs={12} sm={12} md={6} lg={6}>
                            <p className="skillName">{skill.name}</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div className="circlesContainer">
                                {this.getDots(skill.name,score--)}
                                {this.getDots(skill.name,score--)}
                                {this.getDots(skill.name,score--)}
                                {this.getDots(skill.name,score--)}
                                {this.getDots(skill.name,score--)}
                            </div>
                        </Col>
                    </Row>
                </div>)
    }
    render() {
        return (
            <div className="Skills">
                <p className="header">SKILLS</p>
                <hr />
                <div>
                    <p className="backgroundText">SKILLS</p>
                </div>
                <Row className="skillsRow">
                    <Col xs={6} sm={6} md={6} lg={6}>
                        {skills.slice(0,Math.ceil(skills.length / 2)).map((skill) => this.renderSkill(skill, 'left'))}
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        {skills.slice(Math.ceil(skills.length / 2),skills.length).map((skill) => this.renderSkill(skill, 'right'))}
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Skills;