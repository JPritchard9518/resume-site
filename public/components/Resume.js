import React, { Component } from 'react';
import '../assets/styles/Resume.css';
import colors from '../assets/styles/colors.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

var sites = {
    "aclj": {
        url: "https://www.aclj.org",
        title: "ACLJ",
        image: "http://a2cf0d5e15d9d69049aa-596a7347bb8d75314ef5b080382defe2.r58.cf2.rackcdn.com/graphics/ACLJ_Logo_Wide.png",
        body: "My work with the ACLJ website consisted primarily of maintenance and feature requests. ",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'Git']
    },
    "eclj": {
        url: "http://www.eclj.org",
        title: "ECLJ",
        image: "https://71e73428c98d2e64fd6b-596a7347bb8d75314ef5b080382defe2.ssl.cf2.rackcdn.com/ECLJ/ECLJ_Logo.png",
        body: "Working on the ECLJ website was a huge break-through for my programming career. I was the primary developer for the multilingual site (english and french), and lead a team of 3 other interns to complete the project. My work consisted of putting website design drawing into code, site functionality, and database management. This project verifies me as a full-stack developer as I was involved in taking the concept of the site and turn it into a finished project. I was deeply involved in both back-end and front-end coding to bring functionality to the site. One significant project was creating an interface and functionality for attorneys to manage cases. When someone comes to the company looking for legal help, the interface allowed an operator to log the user's information and be sent to an attorney to be rejected or approved. From there, all relevant information within the case would be logged and managed within the application.",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'Git']
    },
    "admin": {
        url: "",
        title: "ACLJ/ECLJ Admin Page",
        imageStyling: { display: 'none' },
        body: "My work with the ACLJ and ECLJ admin page involved user management, content management, database management, and reporting. This server is where many reports are ran, which I have been heavily involved in. I have created reports based on petition signatures, member interaction, financials, ect. These reports are often sent to senior staff in the organization and relied on to make business decisions.",
        languages: ['Node.js', 'JavaScript', 'HTML', 'Pug', 'CSS', 'MongoDB', 'Express', 'Git', 'Excel']
    },
    "jsl": {
        url: "https://www.jaysekulowlive.org",
        title: "Jay Sekulow Live",
        image: "https://7676076fde29cb34e26d-759f611b127203e9f2a0021aa1b7da05.ssl.cf2.rackcdn.com/jsl-logo-md.png",
        imageStyling: { backgroundColor: "#292929", padding: "5px" },
        body: "Jay Sekulow Live is a project created with React that I had minimal involvement in. While I was not the primary developer, I had enough exposure to feel confident using the React framework.",
        languages: ['React', 'JavaScript', 'CSS', 'MongoDB']
    },
    "acljMobile": {
        url: "https://itunes.apple.com/us/app/aclj/id501155881?mt=8",
        title: "ACLJ Mobile App",
        image: "http://a2cf0d5e15d9d69049aa-596a7347bb8d75314ef5b080382defe2.r58.cf2.rackcdn.com/graphics/ACLJ_Logo_Wide.png",
        body: "The ACLJ Mobile application was my first major solo project that I developed and deployed from start to finish. It includes a news feed with the organization's content, radio player, donations, push notifications, and much more. The application was developed for iOS and Android using React-Native.",
        languages: ['React-Native', 'JavaScript', 'Xcode']
    }
}

class Resume extends Component {
    constructor(props) {
        super(props);
        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        this.state = {
            show: false,
            activeSite: { url: '', title: '', image: '', body: '', languages: [] }
        };
    }
    onHover(tile) {
        this.refs[tile].style.opacity = .75;
    }
    offHover(tile) {
        this.refs[tile].style.opacity = 1;
    }
    handleModalClose() {
        this.setState({ show: false });
    }
    handleModalShow(tile) {
        this.setState({ show: true, activeSite: sites[tile] });
    }
    render() {
        return (
            <div style={{ backgroundColor: colors.white, color: colors.greenText }} className="Resume">
                <h3 className="sectionHeaderText">Resume</h3>
                <div className="item">
                    <h2>Education</h2>
                    <hr />
                    <Row style={{ marginLeft: '0px' }}>
                        <Col>
                            <Row>
                                <Col sm={8} md={8} lg={10}>
                                    <p>Graduated from Scottsbluff Senior High School, class of 2013</p>
                                    <p>Bachelor of Science in Computer Science at Liberty University (expected graduation Spring 2018)</p>
                                </Col>

                                <Col sm={4} md={4} lg={2} >
                                    <img className="libertyLogo" alt="libertyUniversity" src="https://files.armssoftware.com/1787345/195a4de3ca6d" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <p>Relevant Courses:</p>
                    <Grid>
                        <Row>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Advanced Programming</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Algorithms and Data Structures</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Introduction to Linux</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Database System Concepts</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Computer Architecture and Organization</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Network Architecture and Protocol</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Theory of Programming Languages</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Operating Systems</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Modern Cryptography</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Server-Side Programming</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Studies in Information Security</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Calculus I & II</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Calculus with MATLAB</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Introduction to Statistical Analysis</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Discrete Mathematics</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div style={{ backgroundColor: colors.darkGrey }} className="tile">
                                    <div className="tileText">Software Engineering</div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Row>
                            <Col>
                                <Row start={'xs'}>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">
                                                <p>C++</p>
                                                <div>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">
                                                <p>Git</p>
                                                <div>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle half-circle">&#x25D0;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">
                                                <p>MATLAB</p>
                                                <div>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText"><p>Bash</p>
                                                <div>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText"><p>Linux</p>
                                                <div>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CF;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                    <p className="circle">&#x25CB;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="resumeSection">
                    <h2>Work Experience</h2>
                    <hr />
                    <p><a className="workLink" href="http://www.aclj.org">American Center for Law and Justice (ACLJ)</a></p>
                    <ul>
                        <li>2015-2018</li>
                        <li>Nashville, TN{/*Check if ok to display this*/}</li>
                        <li>Web-Development Intern</li>
                        <li>I have spend 3 years with the ACLJ working with their developers on web and mobile application development. I would spend the summers working in their Nashville office, and worked mobile during the school year.</li>
                        <li>Website and Application Contributions</li>
                    </ul>
                    <Grid>
                        <Row>
                            <Col className="column" sm={6} md lg >
                                <div ref="aclj" style={{ backgroundColor: colors.darkGrey }} className="tile experienceTile" onMouseOver={() => this.onHover("aclj")} onMouseOut={() => this.offHover("aclj")} onClick={() => this.handleModalShow("aclj")}>
                                    <Glyphicon className="glyphSpacing tileText" glyph="fullscreen" />
                                    <div className="tileText">ACLJ.org</div>

                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div ref="eclj" style={{ backgroundColor: colors.darkGrey }} className="tile experienceTile" onMouseOver={() => this.onHover("eclj")} onMouseOut={() => this.offHover("eclj")} onClick={() => this.handleModalShow("eclj")}>
                                    <Glyphicon className="glyphSpacing tileText" glyph="fullscreen" />
                                    <div className="tileText">ECLJ.org</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="column" sm={6} md lg>
                                <div ref="admin" style={{ backgroundColor: colors.darkGrey }} className="tile experienceTile" onMouseOver={() => this.onHover("admin")} onMouseOut={() => this.offHover("admin")} onClick={() => this.handleModalShow("admin")}>
                                    <Glyphicon className="glyphSpacing tileText" glyph="fullscreen" />
                                    <div className="tileText">ACLJ/ECLJ Admin Page</div>
                                </div>
                            </Col>
                            <Col className="column" sm={6} md lg>
                                <div ref="jsl" style={{ backgroundColor: colors.darkGrey }} className="tile experienceTile" onMouseOver={() => this.onHover("jsl")} onMouseOut={() => this.offHover("jsl")} onClick={() => this.handleModalShow("jsl")}>
                                    <Glyphicon className="glyphSpacing tileText" glyph="fullscreen" />
                                    <div className="tileText">JaySekulowLive.org</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="column" sm={6} md lg>
                                <div ref="acljMobile" style={{ backgroundColor: colors.darkGrey }} className="tile experienceTile" onMouseOver={() => this.onHover("acljMobile")} onMouseOut={() => this.offHover("acljMobile")} onClick={() => this.handleModalShow("acljMobile")}>
                                    <Glyphicon className="glyphSpacing tileText" glyph="fullscreen" />
                                    <div className="tileText">ACLJMobile (iOS)</div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                    <Grid>
                        <Row>
                            <Col>
                                <Row start={'xs'}>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">JavaScript</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">HTML</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">CSS</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">Git</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle half-circle">&#x25D0;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">Node.js</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">Express</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">Pug</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">MongoDB</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">React</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle half-circle">&#x25D0;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">React-Native</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">Google Analytics</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">Excel</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">SalesForce/ExactTarget</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="column" sm={6} md lg>
                                        <div style={{ backgroundColor: colors.tan }} className="languageTile">
                                            <div className="tileText">Facebook/Twitter API</div>
                                            <div>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CF;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                                <p className="circle">&#x25CB;</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="resumeSection">
                    <a target="_blank" href="www.google.com" style={{ fontSize: '20px' }}>Link to PDF Resume</a>
                </div>
                <Modal show={this.state.show} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.activeSite.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="modalImage" alt="projectImage" style={this.state.activeSite.imageStyling} src={this.state.activeSite.image} />
                        <h4><a target="_blank" href={this.state.activeSite.url} style={(this.state.activeSite.url !== "") ? {} : { display: "none" }}>View Project</a></h4>
                        <p>{this.state.activeSite.body}</p>
                        <h4>Languages and Software Learned</h4>
                        <ul>
                            {this.state.activeSite.languages.map((lng) =>
                                <li key={lng}>{lng}</li>
                            )}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Resume;