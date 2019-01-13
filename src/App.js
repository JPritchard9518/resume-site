import React, { Component } from 'react';
// import headerLogo from './assets/images/headerLogo.jpg';
// import logoWhite from './assets/images/logoWhite.png';
import './assets/styles/App.css';
import Bio from './components/Bio.js';
// import Resume from './components/Resume.js';
import Navigation from './components/Navigation.js';
import Adventure from './components/Adventure.js';
import WhatIDo from './components/WhatIDo.js';
import WorkHistory from './components/WorkHistory.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Hobbies from './components/Hobbies.js';
import Contact from './components/Contact.js';
import colors from './assets/styles/colors.js';
// import './assets/styles/Navigation.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // scrollHeader:false,
      // scrollHeaderTransparency:0.5,
      navOpacity: 0,
      width: 0,
      height: 0,
      logoMargin: 0,
      bootstrapBreakpoint: null,
      stickyHeader: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.bootstrapBreakpoint = this.bootstrapBreakpoint.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.updateWindowDimensions);
  }

  bootstrapBreakpoint() {
    var width = window.innerWidth;
    if (width < 768) {
      return 'xs';
    } else if (width < 992) {
      return 'sm';
    } else if (width >= 992) {
      return 'md';
    } else {
      return 'md';
    }
  }
  updateWindowDimensions() {
    var logoMargin = 0;
    var containerHeight = document.getElementById('headerLogo').clientHeight;
    var navHeight = document.getElementById('Navigation').clientHeight;
    logoMargin += window.scrollY * .4;
    var displayScrollHeader = "absolute";
    var navOpacity = 0;
    var breakpoint = (4 * navHeight)
    if (containerHeight < 300)
      breakpoint = (2 * navHeight) // Prevent the nav opacity from being partial when launching on mobile
    var navPad = 0;
    if (window.scrollY > containerHeight - navPad - breakpoint - navHeight && containerHeight !== 0) { // On initial render containerHeight is not set yet
      navOpacity = Math.abs(window.scrollY - (containerHeight - navPad - breakpoint) + navHeight) / (breakpoint)
    }
    var sticky = false;
    if (window.scrollY > containerHeight - navPad - navHeight && containerHeight !== 0) // On initial render containerHeight is not set yet
      sticky = true;
    this.setState({ scrollHeader: displayScrollHeader, navOpacity: navOpacity, width: window.innerWidth, height: window.innerHeight, logoMargin: logoMargin, bootstrapBreakpoint: this.bootstrapBreakpoint(), stickyHeader: sticky });
  }
  render() {
    return (
      <div ref="top" className="App">
        <header className="App-header">
          <div ref="top">
            <img id="headerLogo" src='./assets/images/headerLogo2.jpg' style={{ transform: 'translateY( ' + this.state.logoMargin + 'px)'/*, marginTop: (this.state.bootstrapBreakpoint === 'xs') ? '-50px' : '-100px'*/ }} className="header-logo" alt="logo" />
            {/* <div style={{ transform: 'translateY( ' + (this.state.logoMargin) + 'px)'}} className="headerLogoText">Front and Back End Development</div> */}
            <Navigation bootstrapBreakpoint={this.state.bootstrapBreakpoint} top={this.refs.top} bio={this.refs.bio} adventure={this.refs.adventure} whatIDo={this.refs.whatIDo} skills={this.refs.skills} workHistory={this.refs.workHistory} education={this.refs.education} hobbies={this.refs.hobbies} contact={this.refs.contact} sticky={this.state.stickyHeader} navOpacity={this.state.navOpacity} />
          </div>
        </header>
        <Bio bootstrapBreakpoint={this.state.bootstrapBreakpoint} ref="bio" />
        <Adventure bootstrapBreakpoint={this.state.bootstrapBreakpoint} ref="adventure" />
        <WhatIDo bootstrapBreakpoint={this.state.bootstrapBreakpoint} ref="whatIDo" />
        <Skills bootstrapBreakpoint={this.state.bootstrapBreakpoint} ref="skills" />
        <WorkHistory bootstrapBreakpoint={this.state.bootstrapBreakpoint} ref="workHistory" />
        <Education bootstrapBreakpoint={this.state.bootstrapBreakpoint} ref="education" />
        <Hobbies bootstrapBreakpoint={this.state.bootstrapBreakpoint} ref="hobbies" />
        <Contact bootstrapBreakpoint={this.state.bootstrapBreakpoint} ref="contact" />
        {/* <Resume ref="resume" width={this.state.width} height={this.state.height}/> */}
        {/*Include footer with info about how this site was made. React, boostrap, etc.*/}
        <footer className="App-footer" style={{ backgroundColor: colors.black, }}>
          <img className="footerLogo" alt="footerImage" src='./assets/images/logoWhite.png' />
          <p>This project was developed by Justin Pritchard using <a target="_blank" className="footerLink" href="https://reactjs.org/">React</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;