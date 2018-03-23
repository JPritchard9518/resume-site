import React, { Component } from 'react';
import '../assets/styles/Bio.css';
// import colors from '../styles/colors.js';
import { Row, Col } from 'react-bootstrap';

class Bio extends Component {
    render() {
        return (
            <div className="Bio">
                <p className="header">ABOUT ME</p>
                <hr/>
                    <Row>
                        <Col style={{top: (this.props.bootstrapBreakpoint === 'xs')? 0 : '-75px', padding: '20px'}} xs={12} sm={12} md={4} lg={4}>
                            {/* Image Goes Here */}
                        <div style={{ maxWidth: '300px', height: '400px', backgroundColor: '#495262', margin: '0 auto'}}></div>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <p className="aboutMeText">I develop professional applications for digital platforms using the best practices and technology available. Each project is rooted in the desire to change lives while also providing and analyzing data to inform smarter business decisions.</p>
                        </Col>
                    </Row>
            </div>
            // <div className="Bio" style={{backgroundColor: colors.white, color: colors.greenText}}>
            //     {/* <p style={{padding:'20px',margin:0}}>My name is Justin Pritchard and aspire to be a web and application developer.</p> */}
            //     <h3 className="sectionHeaderText">About Me</h3>
            //     <div className="item">
            //         <h2>Contact Information</h2>
            //         <hr />
            //         <p>Address: 174 Cooks Branch Rd. Lynchburg VA, 24501</p>
            //         <p>Phone (cell): (308)-641-2361</p>
            //         <p>E-Mail: jpritchard9518@gmail.com{/*Add e-mail link*/}</p>
            //     </div>
            //     <div className="item">
            //         <h2>Born and Raised</h2>
            //         <hr/>
            //         <p>I was born in Denver Colorado and grew up in Scottsbluff Nebraska.</p>
            //         {/*Include map plug-in*/}
            //     </div>
                
            //     <div className="item">
            //         <h2>Accomplishments</h2>
            //         <hr/>
            //         <p>Private Pilot's License</p>
            //         <p>SCUBA Certified</p>
            //         <p>2x Nebraska State Champion Cross Country</p>
            //             <ul>
            //                 <li>2010 State Champions (team)</li>
            //                 <li>2011 State Champions (team)</li>
            //                 <li>2012 State Runner-Up (team)</li>
            //             </ul>
            //         <p>2x Nebraska State Champion Track and Field</p>
            //             <ul>
            //                 <li>2012 State Runner-Up 4x800 Relay</li>
            //                 <li>2012 State Champions (team)</li>
            //                 <li>2013 State Champion 4x800 Relay</li>
            //                 <li>2013 State Runner-Up (team)</li>
            //             </ul>
            //     </div>
            //     <div className="item">
            //         <h2>Interests</h2>
            //         <hr/>
            //         <ul>
            //             <li>Fly-Fishing</li>
            //             <li>Hiking</li>
            //             <li>Back-Packing</li>
            //             <li>Traveling</li>
            //             <li>Wood Working</li>
            //             <li>Reading</li>
            //         </ul>
            //     </div>
            // </div>
        );
    }
}

export default Bio;