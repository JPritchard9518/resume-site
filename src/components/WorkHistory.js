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
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'AWS', 'Git']
    },
    "eclj": {
        url: "http://www.eclj.org",
        title: "ECLJ",
        image: "https://71e73428c98d2e64fd6b-596a7347bb8d75314ef5b080382defe2.ssl.cf2.rackcdn.com/ECLJ/ECLJ_Logo.png",
        body: "Working on the ECLJ website was a huge break-through for my programming career. I was a primary developer for the multilingual site (english and french), and led a team of 3 other interns to complete the project. My work consisted of putting website design drawings into code, content management, site functionality, and database management. This project labels me as a full-stack developer as I was involved in the project from the ground up. I was part of the development process from conception to completion. I was deeply involved in both back-end and front-end coding to bring functionality to the site.",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'AWS', 'Git']
    },
    "EK": {
        url: "",
        title: "Elasticsearch and Kibana",
        image: "data:image/png;base64,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",
        body: "One of my first major solo projects after starting full-time with the ACLJ was building an Elasticsearch and Kibana docker container to be deployed on AWS Elastic Beanstalk. The Elasticsearch instance is used to generate reports in real-time based on how members are engaging with the organization, how donations come into the organization, and traffic that comes to the website. These reports have been used to inform and guide the organization going forward.",
        languages: ["Elasticsearch", "Kibana", "AWS", "Docker", "Git"]
    },
    "admin": {
        url: "",
        title: "ACLJ/ECLJ Admin Page",
        // imageStyling: { display: 'none' },
        image: "data:image/png;base64,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",//"./assets/images/Admin.png",
        body: "My work with the ACLJ and ECLJ admin page involved user management, content management, database management, and reporting. This server/website is where many reports are created which I have been involved in and trusted to gather metrics. I have created reports based on petition signatures, member interaction, financials, etc. These reports are often sent to senior staff in the organization and relied on to make informed business decisions. One significant project involved creating an interface and functionality for attorneys to manage legal cases. When someone comes to the organization looking for legal help, the interface allows an operator to log the user's information which is sent to an attorney to be rejected or approved. From there, all relevant information within the case is logged and managed within the application.",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'AWS', 'Git']
    },
    "jsl": {
        url: "http://www.jaysekulowlive.org",
        title: "Jay Sekulow Live",
        image: "https://7676076fde29cb34e26d-759f611b127203e9f2a0021aa1b7da05.ssl.cf2.rackcdn.com/jsl-logo-md.png",
        imageStyling: { backgroundColor: "#292929", padding: "5px" },
        body: "Jay Sekulow Live is a project created with React that in which I had minimal involvement. While I was not the primary developer, I had enough exposure to feel confident using the React framework.",
        languages: ['Node.js', 'React', 'JavaScript', 'CSS', 'MongoDB', 'Git']
    },
    "acljMobile": {
        url: "https://itunes.apple.com/us/app/aclj/id501155881?mt=8",
        title: "ACLJ Mobile App",
        image: "http://a2cf0d5e15d9d69049aa-596a7347bb8d75314ef5b080382defe2.r58.cf2.rackcdn.com/graphics/ACLJ_Logo_Wide.png",
        body: "The ACLJ Mobile application was my first major solo project that I developed and deployed from start to finish. It includes a news feed with the organization's content, radio player, donations, push notifications, and much more. The application was developed for iOS and Android using React-Native.",
        languages: ['React-Native (iOS & Android)', 'JavaScript', 'MongoDB', 'Xcode', 'Android Studio', 'Git']
    },
    "glow": {
        url: "http://ec2-54-81-242-108.compute-1.amazonaws.com:9000",
        title: "G.L.O.W (Global Library of Worship)",
        image: "./assets/images/GlowLogo.png",
        imageStyling: { backgroundColor: "#161E2F", padding: "5px" },
        body: "GLOW was a project I worked on while at Liberty University for community service credit. The project is an effort to document culturally relevant, locally-sourced worship arts from every nation, tribe, and tongue. The site allows a user to upload and host media for playback around the world. The mission is to create an evironment for artists around the world to post worship music in their native tongue free from persecution and legal pressure. While the site is fully functional, it is currently just a protype used to present the concept.",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'AWS', 'MongoDB', 'Express', 'Git']
    },
    "lineApp": {
        url: "",
        title: "Refugee Line App",
        image: "",
        imageStyling: {},
        body: "The Refugee Line App is a project created for my computer science captsone course at Liberty Univsersity. We were partnered with an organization in Europe that works with refugee camps. There have been problems at the camps involving refugees who receive items from a resource line multiple times and sell those items on the black-market. We were asked to come up with an application that would validate a recipient and deny access based on their access history. The project consisted of a Node.js application which served as a hub for reporting and database interaction. An Android application was created using React-Native which does the validation of a recipient. An external fingerprint sensor was attached to the phone as the means of validation.",
        languages: ['Node.js', 'JavaScript', 'React-Native (Android)', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Docker', 'Git']
    },
    "JP": {
        url: "",
        title: "Personal Site",
        image: "./assets/images/logoWhite.png",
        imageStyling: { backgroundColor: "#000", padding: "15px" },
        body: "My personal site which you are viewing right now was made completely with React. The purpose of this project was to gain more experience and provide a way to market myself in a way that a resume couldn't.",
        languages: ['Node.js', 'JavaScript', 'React', 'HTML', 'CSS', 'AWS', 'Git']
    }
}

class WorkHistory extends Component {
    constructor(props) {
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
    componentWillReceiveProps() {
        var leftColClass = '';
        var workRowClass = '';
        if (['sm', 'md', 'lg'].indexOf(this.props.bootstrapBreakpoint) > -1) {
            leftColClass = "column left";
        } else {
            leftColClass = "column right"
        }
        if (['md', 'lg'].indexOf(this.props.bootstrapBreakpoint) > -1) {
            workRowClass = "workRow"
        } else {
            workRowClass = "workRowSmall"
        }
        this.setState({ leftColClass: leftColClass, workRowClass: workRowClass })

    }
    onHover(tile) {
        if (tile === 'lineApp')
            this.refs[tile].style.opacity = .5;
        else
            this.refs[tile].style.opacity = 1;
        this.refs[tile].style.cursor = "pointer";
    }
    offHover(tile) {
        if (tile === 'lineApp')
            this.refs[tile].style.opacity = 1;
        else
            this.refs[tile].style.opacity = 0;
        this.refs[tile].style.cursor = "";
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
                <div style={{ height: 0 }}>
                    <p className="backgroundText">WORK HISTORY</p>
                </div>
                <p className="header">Work History</p>
                <hr />
                <Row className={this.state.workRowClass}>
                    <Col className={this.state.leftColClass} xs={12} sm={12} md={6} lg={6}>
                        <p className="workName">American Center for Law and Justice (ACLJ)</p>
                        <p className="workLocation">Nashville, TN</p>
                        <p className="workTimeFrame">2015 - June 2018</p>
                    </Col>
                    <Col className="column right" xs={12} sm={12} md={6} lg={6}>
                        <p className="jobTitle">Web Development Intern</p>
                        <p className="description">I intered with the ACLJ for 3 years learning from their developers to create web and mobile applications. That period of time consisted of website creation from start to finish, website maintenance, mobile application development, data analytics/reporting, and database management. I worked our of their Nashville office for 3 summers, and remotely while being a full-time student.</p>
                        {/* <p className="description">I have 3 years experience with the ACLJ learning from their developers to create web and mobile applications. My time there has consisted of website creation from start to finish, website maintenance, mobile application development, data analytics/reporting, and database management. I worked out of the Nashville office for the past 3 summers, and remotely while at school.</p> */}
                    </Col>
                    <Col className={this.state.leftColClass} xs={12} sm={12} md={6} lg={6}>
                        <p className="workLocation">Nashville, TN</p>
                        <p className="workTimeFrame">June 2018 - Current</p>
                    </Col>
                    <Col className="column right" xs={12} sm={12} md={6} lg={6}>
                        <p className="jobTitle">Junior Developer/Data Analyst</p>
                        <p className="description">In June of 2018 I was brought on full-time as part of the ACLJ's development team. Since that time I have created many custom reports for senior management, implemented feature requests for the website and admin website, and headlined other major projects. One of my first major tasks was implementing an Elasticsearch and Kibana Docker container on AWS to generate reports based on the organization's member engagement, donations, and site traffic. In September of 2018 I was given the task of completely rewriting the organization's mobile application for iOS, and for the first time implementing the application for Android. Both applications were written using React-Native.</p>
                    </Col>
                </Row>
                <p className="header" style={{ marginTop: '30px' }}>Projects</p>
                <hr />
                <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '30px' }}>
                    <Row className="projectRow">
                        <Col xs={12} sm={12} md={4} lg={4}>

                            <div className="projectTile" onMouseOver={() => this.onHover("aclj")} onMouseOut={() => this.offHover("aclj")} onClick={() => this.handleModalShow("aclj")}>
                                <div ref="aclj" className="hoverTile"><p className="hoverTileText">ACLJ.org</p></div>
                                <img alt="ACLJ" className="tileImage" src={sites['aclj'].image} />

                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" style={{ borderRadius: 50 }} onMouseOver={() => this.onHover("acljMobile")} onMouseOut={() => this.offHover("acljMobile")} onClick={() => this.handleModalShow("acljMobile")}>
                                <div ref="acljMobile" className="hoverTile" style={{ borderRadius: 50 }}><p className="hoverTileText">ACLJ Mobile</p></div>
                                <img alt="ACLJ Mobile" className="tileImage" src={sites['acljMobile'].image} />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" onMouseOver={() => this.onHover("eclj")} onMouseOut={() => this.offHover("eclj")} onClick={() => this.handleModalShow("eclj")}>
                                <div ref="eclj" className="hoverTile"><p className="hoverTileText">ECLJ.org</p></div>
                                <img alt="ECLJ" className="tileImage" style={{ maxHeight: '90%' }} src={sites['eclj'].image} />
                            </div>
                        </Col>
                    </Row>
                    <Row /*style={(['sm','md','lg'].indexOf(this.props.bootstrapBreakpoint) > -1) ? {padding: '0 135px'} : {}}*/ className="projectRow">
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" onMouseOver={() => this.onHover("admin")} onMouseOut={() => this.offHover("admin")} onClick={() => this.handleModalShow("admin")}>
                                <div ref="admin" className="hoverTile"><p className="hoverTileText">ACLJ/ECLJ Admin</p></div>
                                <img alt="Admin" className="tileImage" style={{ maxWidth: '90%' }} src={sites['admin'].image} />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" style={{ backgroundColor: "#000" }} onMouseOver={() => this.onHover("jsl")} onMouseOut={() => this.offHover("jsl")} onClick={() => this.handleModalShow("jsl")}>
                                <div ref="jsl" className="hoverTile"><p className="hoverTileText">Jay Sekulow Live</p></div>
                                <img alt="Jay Sekulow Live" style={{ maxWidth: '90%' }} className="tileImage" src={sites['jsl'].image} />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" style={{ backgroundColor: '#FFF' }} onMouseOver={() => this.onHover("EK")} onMouseOut={() => this.offHover("EK")} onClick={() => this.handleModalShow("EK")}>
                                <div ref="EK" className="hoverTile" style={{ padding: '5px' }}><p className="hoverTileText">Elasticsearch & Kibana</p></div>
                                <img alt="Elasticsearch - Kibana" className="tileImage" style={{ maxWidth: '90%' }} src={sites['EK'].image} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="projectRow">
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" style={{ backgroundColor: '#161E2F' }} onMouseOver={() => this.onHover("glow")} onMouseOut={() => this.offHover("glow")} onClick={() => this.handleModalShow("glow")}>
                                <div ref="glow" className="hoverTile"><p className="hoverTileText">Global Library of Worship</p></div>
                                <img alt="Glow" className="tileImage" style={{ maxWidth: '90%' }} src={sites['glow'].image} />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div ref="lineApp" className="projectTile" style={{ backgroundColor: '#FFF', display: 'table' }} onMouseOver={() => this.onHover("lineApp")} onMouseOut={() => this.offHover("lineApp")} onClick={() => this.handleModalShow("lineApp")}>
                                {/* <img alt="Line App" className="tileImage" style={{ maxWidth: '90%' }} src={sites['lineApp'].image} /> */}
                                <p style={{ color: "#000", display: 'table-cell', verticalAlign: 'middle', fontSize: '30px' }}>Line App</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="projectTile" style={{ backgroundColor: '#000' }} onMouseOver={() => this.onHover("JP")} onMouseOut={() => this.offHover("JP")} onClick={() => this.handleModalShow("JP")}>
                                <div ref="JP" className="hoverTile"><p className="hoverTileText">Personal Site</p></div>
                                <img alt="Personal Site" className="tileImage" style={{ maxWidth: '75%' }} src={sites['JP'].image} />
                            </div>
                        </Col>
                    </Row>
                    <a className="resumeDownload" href="./assets/documents/Justin Pritchard Resume.pdf" download>Download Resume (PDF)</a>
                </div>
                <Modal show={this.state.show} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.activeSite.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={(this.state.activeSite.image === '') ? { display: 'none' } : {}}>
                            <img className="modalImage" alt="projectImage" style={this.state.activeSite.imageStyling} src={this.state.activeSite.image} />
                        </div>
                        <h4><a target="_blank" href={this.state.activeSite.url} style={(this.state.activeSite.url !== "") ? {} : { display: "none" }}>View Project</a></h4>
                        <p>{this.state.activeSite.body}</p>
                        <h4>Languages and Software Used</h4>
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