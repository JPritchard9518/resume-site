import React, { Component } from 'react';
import '../assets/styles/Navigation.css';
// import logoWhite from '../assets/images/logoWhite.png';
// import colors from '../styles/colors.js';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import scrollToComponent from 'react-scroll-to-component';
require("react-bootstrap/lib/NavbarHeader")


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navStyle: {}
        }
    }
    componentDidMount() {
        // debugger;
        // scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
    }
    componentWillReceiveProps() {
        var navStyle = {};
        navStyle.opacity = navStyle.backgroundColor = 'RGBA(28, 44, 56,' + this.props.navOpacity + ')';
        if (this.props.sticky) {
            navStyle.position = 'fixed';
            navStyle.top = '0px';
        }
        this.setState({ navStyle: navStyle })
    }
    scrollTo(ref) {
        scrollToComponent(ref, { offset: -65, align: 'top', duration: 1000 })
    }
    render() {
        if (this.props.bootstrapBreakpoint !== 'xs') {
            return (
                <div className="Navigation" id="Navigation" style={this.state.navStyle}>
                    <nav>
                        <div className='navLogoContainer' onClick={() => this.scrollTo(this.props.top)}>
                            <img alt="NavigationLogo" className="navLogo" src='./assets/images/logoWhite.png' />
                        </div>
                        <div className="navListContainer">
                            <ul className="navList">

                                <li className="navItem" onClick={() => this.scrollTo(this.props.bio)}>ABOUT</li>
                                <li className="navItem" onClick={() => this.scrollTo(this.props.adventure)}>ADVENTURE</li>
                                <li className="navItem" onClick={() => this.scrollTo(this.props.whatIDo)}>WHAT I DO</li>
                                <li className="navItem" onClick={() => this.scrollTo(this.props.skills)}>SKILLS</li>
                                <li className="navItem" onClick={() => this.scrollTo(this.props.workHistory)}>WORK HISTORY</li>
                                <li className="navItem" onClick={() => this.scrollTo(this.props.education)}>EDUCATION</li>
                                <li className="navItem" onClick={() => this.scrollTo(this.props.hobbies)}>HOBBIES</li>
                                <li className="navItem" onClick={() => this.scrollTo(this.props.contact)}>CONTACT</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        } else {
            return (
                <div className="Navigation" id="Navigation" style={this.state.navStyle}>
                    <Navbar style={{ backgroundColor: this.state.navStyle.backgroundColor }}>
                        <Navbar.Toggle style={{ float: 'left', width: '100%', height: '65px' }} >
                            {/* <button type="button" style={{width: '100%'}} className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> */}
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                            {/* </button> */}
                            <p className="navTitle" style={{ opacity: this.props.navOpacity }}>JUSTIN PRITCHARD</p>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="navbar" style={{ backgroundColor: 'RGB(28, 44, 56)' }}>
                            <Nav>
                                <li onClick={() => this.scrollTo(this.props.top)}><img alt="NavigationLogo" className="navLogoCondensed" src='./assets/images/logoWhite.png' /></li>
                                <li className="nav-item" onClick={() => this.scrollTo(this.props.bio)}>ABOUT</li>
                                <li className="nav-item" onClick={() => this.scrollTo(this.props.whatIDo)}>WHAT I DO</li>
                                <li className="nav-item" onClick={() => this.scrollTo(this.props.skills)}>SKILLS</li>
                                {/* <li onClick={() => this.scrollTo(this.props.top)}><img alt="NavigationLogo" className="navLogo" src='./assets/images/logoWhite.png' /></li> */}
                                <li className="nav-item" onClick={() => this.scrollTo(this.props.workHistory)}>WORK HISTORY</li>
                                <li className="nav-item" onClick={() => this.scrollTo(this.props.education)}>EDUCATION</li>
                                <li className="nav-item" onClick={() => this.scrollTo(this.props.hobbies)}>HOBBIES</li>
                                <li className="nav-item" onClick={() => this.scrollTo(this.props.contact)}>CONTACT</li>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                // <div className="Navigation" id="Navigation" style={this.state.navStyle}>
                //     <nav className="navbar navbar-default" style={{ backgroundColor: this.state.navStyle.backgroundColor }}>
                //         {/* <div className="container-fluid"> */}
                //             {/* <div className="navbar-header"> */}
                //                 <button style={{float: 'left', width: '100%'}} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                //                     <span className="sr-only">Toggle navigation</span>
                //                     <span className="icon-bar top-bar"></span>
                //                     <span className="icon-bar middle-bar"></span>
                //                     <span className="icon-bar bottom-bar"></span>
                //                 </button>
                //             {/* </div> */}
                //             <div id="navbar" style={{ backgroundColor: 'RGB(28, 44, 56)'}} className="navbar-collapse collapse">
                //                 <ul className="navbar-nav" data-toggle="dropdown">
                //                     <li onClick={() => this.scrollTo(this.props.top)}><img alt="NavigationLogo" className="navLogoCondensed" src='./assets/images/logoWhite.png' /></li>
                //                     <li className="nav-item" onClick={() => this.scrollTo(this.props.bio)}>ABOUT</li>
                //                     <li className="nav-item" onClick={() => this.scrollTo(this.props.whatIDo)}>WHAT I DO</li>
                //                     <li className="nav-item" onClick={() => this.scrollTo(this.props.skills)}>SKILLS</li>
                //                     {/* <li onClick={() => this.scrollTo(this.props.top)}><img alt="NavigationLogo" className="navLogo" src='./assets/images/logoWhite.png' /></li> */}
                //                     <li className="nav-item" onClick={() => this.scrollTo(this.props.workHistory)}>WORK HISTORY</li>
                //                     <li className="nav-item" onClick={() => this.scrollTo(this.props.education)}>EDUCATION</li>
                //                     <li className="nav-item" onClick={() => this.scrollTo(this.props.hobbies)}>HOBBIES</li>
                //                     <li className="nav-item" onClick={() => this.scrollTo(this.props.contact)}>CONTACT</li>
                //                 </ul>
                //             </div>
                //         {/* </div> */}
                //     </nav>
                // </div>
            );
        }
    }
}

export default Navigation;