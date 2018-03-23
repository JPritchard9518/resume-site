import React, { Component } from 'react';
import '../assets/styles/WorkHistory.css';
// import colors from '../styles/colors.js';
import { Row, Col } from 'react-flexbox-grid';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

var sites = {
    "aclj": {
        url: "https://www.aclj.org",
        title: "ACLJ",
        image: "http://a2cf0d5e15d9d69049aa-596a7347bb8d75314ef5b080382defe2.r58.cf2.rackcdn.com/graphics/ACLJ_Logo_Wide.png",
        body: "The ACLJ has the mission of protecting religious and constitutional freedoms. Their website is a platform for news, petitions, and hosting the Jay Sekulow radio show. My work with the ACLJ website consists primarily of maintenance and feature requests.",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'Git']
    },
    "eclj": {
        url: "http://www.eclj.org",
        title: "ECLJ",
        image: "https://71e73428c98d2e64fd6b-596a7347bb8d75314ef5b080382defe2.ssl.cf2.rackcdn.com/ECLJ/ECLJ_Logo.png",
        body: "Working on the ECLJ website was a huge break-through for my programming career. I was a primary developer for the multilingual site (english and french), and led a team of 3 other interns to complete the project. My work consisted of putting website design drawings into code, content management, site functionality, and database management. This project labels me as a full-stack developer as I was involved in the project from the ground up. I was part of the development process from conception to completion. I was deeply involved in both back-end and front-end coding to bring functionality to the site.",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'Git']
    },
    "admin": {
        url: "",
        title: "ACLJ/ECLJ Admin Page",
        // imageStyling: { display: 'none' },
        image: "./assets/images/Admin.png",
        body: "My work with the ACLJ and ECLJ admin page involved user management, content management, database management, and reporting. This server is where many reports are created which I have been involved in and trusted to gather metrics. I have created reports based on petition signatures, member interaction, financials, etc. These reports are often sent to senior staff in the organization and relied on to make informed business decisions. One significant project involved creating an interface and functionality for attorneys to manage legal cases. When someone comes to the company looking for legal help, the interface allows an operator to log the user's information and be sent to an attorney to be rejected or approved. From there, all relevant information within the case is logged and managed within the application.",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'Git', 'Excel']
    },
    "jsl": {
        url: "http://www.jaysekulowlive.org",
        title: "Jay Sekulow Live",
        image: "https://7676076fde29cb34e26d-759f611b127203e9f2a0021aa1b7da05.ssl.cf2.rackcdn.com/jsl-logo-md.png",
        imageStyling: { backgroundColor: "#292929", padding: "5px" },
        body: "Jay Sekulow Live is a project created with React that in which I had minimal involvement. While I was not the primary developer, I had enough exposure to feel confident using the React framework.",
        languages: ['Node.js','React', 'JavaScript', 'CSS', 'MongoDB']
    },
    "acljMobile": {
        url: "https://itunes.apple.com/us/app/aclj/id501155881?mt=8",
        title: "ACLJ Mobile App",
        image: "http://a2cf0d5e15d9d69049aa-596a7347bb8d75314ef5b080382defe2.r58.cf2.rackcdn.com/graphics/ACLJ_Logo_Wide.png",
        body: "ACLJ Mobile was one of my first major projects with the ACLJ team. At the time of the project the only programming class I had taken at school was intro to programming. This project really stretched me as it taught me to study, research, learn, and work with a team.",
        languages: ['React-Native (iOS)', 'JavaScript', 'Xcode']
    },
    "glow":{
        url: "http://ec2-54-81-242-108.compute-1.amazonaws.com:9000",
        title: "G.L.O.W (Global Library of Worship)",
        image: "./assets/images/GlowLogo.png",
        imageStyling: { backgroundColor: "#161E2F", padding: "5px" },
        body: "GLOW was a project I worked on while at Liberty University for community service credit. The project is an effort to document culturally relevant, locally-sourced worship arts from every nation, tribe, and tongue. The site allows a user to upload and host media for playback around the world. The mission is to create an evironment for artists around the world to post worship music in their native tongue free from persecution and legal pressure. While the site is fully functional, it is currently just a protype used to present the concept.",
        languages: ['Node.js','JavaScript','HTML','Pug','CSS','AWS','MongoDB','Express','Git']
    },
    "lineApp": {
        url: "",
        title: "Refugee Line App",
        image: "",
        imageStyling: {},
        body: "This project is currently in progress, link and image to come in near future. The Refugee Line App is a project created for my computer science captsone course at Liberty Univsersity. We have partnered with an organization in Europe that works with refugee camps. There have been problems at the camps involving refugees who receive items from a line multiple times and sell those items on the black-market. We were asked to come up with an application that would validate a recipient and deny access based on their access history. The project consisted of a Node.js application which served as a hub for reporting and database interaction. An Android application was created using React-Native which does the validation of a recipient. An external fingerprint sensor was attached to the phone as the means of validation.",
        languages: ['Node.js','JavaScript','React-Native (Android)','HTML','Pug','CSS','MongoDB']
    }
}

class WorkHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            leftColClass: '',
            workRowClass: '',
            show: false,
            activeSite: { url: '', title: '', image: '', body: '', languages: [] }
        }
        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
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
    onHover(tile) {
        if (tile === 'lineApp')
            this.refs[tile].style.opacity = .5;
        else
            this.refs[tile].style.opacity = 1;
    }
    offHover(tile) {
        if(tile === 'lineApp')
            this.refs[tile].style.opacity = 1;
        else
            this.refs[tile].style.opacity = 0;
    }
    handleModalClose() {
        this.setState({ show: false });
    }
    handleModalShow(tile) {
        this.setState({ show: true, activeSite: sites[tile] });
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
                        <p className="description">I have 3 years experience with the ACLJ learning from their developers to create web and mobile applications. My time there has consisted of website creation from start to finish, website maintenance, mobile application development, data analytics/reporting, and database management. I worked out of the Nashville office for the past 3 summers, and remotely while at school.</p>
                    </Col>
                </Row>
                <p className="header" style={{marginTop: '30px'}}>Projects</p>
                <hr />
                <div style={{maxWidth: '800px', margin: '0 auto', paddingTop: '30px'}}>
                    <Row className="projectRow">
                        <Col xs={12} sm={12} md={4} lg={4}>
                            
                            <div className="projectTile" onMouseOver={() => this.onHover("aclj")} onMouseOut={() => this.offHover("aclj")} onClick={() => this.handleModalShow("aclj")}>
                                <div ref="aclj" className="hoverTile"><p className="hoverTileText">ACLJ.org</p></div>
                                <img alt="ACLJ" className="tileImage" src={sites['aclj'].image}/>
                                
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" style={{ borderRadius: 50 }} onMouseOver={() => this.onHover("acljMobile")} onMouseOut={() => this.offHover("acljMobile")} onClick={() => this.handleModalShow("acljMobile")}>
                                <div ref="acljMobile" className="hoverTile" style={{borderRadius: 50}}><p className="hoverTileText">ACLJ Mobile</p></div>
                                <img alt="ACLJ Mobile" className="tileImage" src={sites['acljMobile'].image} />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" onMouseOver={() => this.onHover("eclj")} onMouseOut={() => this.offHover("eclj")} onClick={() => this.handleModalShow("eclj")}>
                                <div ref="eclj" className="hoverTile"><p className="hoverTileText">ECLJ.org</p></div>
                                <img alt="ECLJ" className="tileImage" style={{maxHeight: '90%'}} src={sites['eclj'].image}/>
                            </div>
                        </Col>
                    </Row>
                    <Row /*style={(['sm','md','lg'].indexOf(this.props.bootstrapBreakpoint) > -1) ? {padding: '0 135px'} : {}}*/ className="projectRow">
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" onMouseOver={() => this.onHover("admin")} onMouseOut={() => this.offHover("admin")} onClick={() => this.handleModalShow("admin")}>
                                <div ref="admin" className="hoverTile"><p className="hoverTileText">ACLJ/ECLJ Admin</p></div>
                                <img alt="Admin" className="tileImage" style={{ maxWidth: '90%' }} src={sites['admin'].image}/>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" style={{backgroundColor:"#000"}} onMouseOver={() => this.onHover("jsl")} onMouseOut={() => this.offHover("jsl")} onClick={() => this.handleModalShow("jsl")}>
                                <div ref="jsl" className="hoverTile"><p className="hoverTileText">Jay Sekulow Live</p></div>
                                <img alt="Jay Sekulow Live" style={{ maxWidth: '90%' }} className="tileImage" src={sites['jsl'].image}/>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" style={{ backgroundColor: '#161E2F'}} onMouseOver={() => this.onHover("glow")} onMouseOut={() => this.offHover("glow")} onClick={() => this.handleModalShow("glow")}>
                                <div ref="glow" className="hoverTile"><p className="hoverTileText">Global Library of Worship</p></div>
                                <img alt="Glow" className="tileImage" style={{maxWidth: '90%'}} src={sites['glow'].image}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="projectRow">
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <div ref="lineApp" className="projectTile" style={{ backgroundColor: '#FFF',display:'table' }} onMouseOver={() => this.onHover("lineApp")} onMouseOut={() => this.offHover("lineApp")} onClick={() => this.handleModalShow("lineApp")}>
                                {/* <img alt="Line App" className="tileImage" style={{ maxWidth: '90%' }} src={sites['lineApp'].image} /> */}
                                <p style={{color:"#000",display:'table-cell',verticalAlign:'middle',fontSize:'30px'}}>Line App</p>
                            </div>
                        </Col>
                    </Row>
                    <a className="resumeDownload" href="./assets/documents/Justin Pritchard Resume.pdf" download>Download Resume PDF</a>
                </div>
                <Modal show={this.state.show} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.activeSite.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={(this.state.activeSite.image === '') ? {display:'none'}:{}}>
                            <img className="modalImage" alt="projectImage" style={this.state.activeSite.imageStyling} src={this.state.activeSite.image} />
                        </div>
                        <h4><a target="_blank" href={this.state.activeSite.url} style={(this.state.activeSite.url !== "") ? {} : { display: "none" }}>View Project</a></h4>
                        <p>{this.state.activeSite.body}</p>
                        <h4>Languages and Software Learned</h4>
                        <Row>
                            {this.state.activeSite.languages.map((lng) =>
                                <Col key={lng}>
                                    <div className="lngTile">
                                        {lng}
                                    </div>
                                </Col>
                            )}
                        </Row>
                        {/* <ul>
                            {this.state.activeSite.languages.map((lng) =>
                                <li key={lng}>{lng}</li>
                            )}
                        </ul> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}

export default WorkHistory;