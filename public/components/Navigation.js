import React, { Component } from 'react';
import '../assets/styles/Navigation.css';
import logoWhite from '../assets/images/logoWhite.png';
// import colors from '../styles/colors.js';
import scrollToComponent from 'react-scroll-to-component';


class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            navStyle:{}
        }
    }
    componentDidMount() {
        // debugger;
        // scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
    }
    componentWillReceiveProps(){
        var navStyle = {};
        navStyle.opacity = navStyle.backgroundColor = 'RGBA(249, 105, 105,' + this.props.navOpacity + ')';
        if(this.props.sticky){
            navStyle.position = 'fixed';
            navStyle.top = '0px';
            // navStyle.width = '100%';

        }else{
            // navStyle.bottom = '0px'
        }

        this.setState({navStyle:navStyle})
    }
    render() {
        if(this.props.bootstrapBreakpoint !== 'xs'){
            return (
                <div className="Navigation" id="Navigation" style={this.state.navStyle}>
                    <nav>
                        <ul className="navList">
                            <li className="navItem" onClick={() => scrollToComponent(this.props.bio, { offset: -65, align: 'top', duration: 1000 })}>ABOUT</li>
                            <li className="navItem" onClick={() => scrollToComponent(this.props.bio, { offset: -65, align: 'top', duration: 1000 })}>SERVICE</li>
                            <li  onClick={() => scrollToComponent(this.props.top, { offset: -65, align: 'top', duration: 1000 })}><img alt="NavigationLogo" className="navLogo" src={logoWhite} /></li>
                            <li className="navItem" onClick={() => scrollToComponent(this.props.resume, { offset: -65, align: 'top', duration: 1000 })}>BLOG</li>
                            <li className="navItem" onClick={() => scrollToComponent(this.props.resume, { offset: -65, align: 'top', duration: 1000 })}>CONTACT</li>
                        </ul>
                    </nav>
                </div>
            );
        }else{
            return(
                <div className="Navigation" id="Navigation" style={this.state.navStyle}>
                    <nav style={{display: 'unset'}} className="navigationCondensed navbar navbar-toggleable-md navbar-light bg-faded">
                        <button style={{float: 'left', marginLeft: '20px'}} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav" style={{ backgroundColor: 'rgb(249, 105, 105)',  marginTop: '35px'}}>
                            <ul className="navbar-nav">
                                <li className="nav-item" onClick={() => scrollToComponent(this.props.bio, { offset: -65, align: 'top', duration: 1000 })}>ABOUT</li>
                                <li className="nav-item" onClick={() => scrollToComponent(this.props.whatIDo, { offset: -65, align: 'top', duration: 1000 })}>WHAT I DO</li>
                                <li className="nav-item" onClick={() => scrollToComponent(this.props.skills, { offset: -65, align: 'top', duration: 1000 })}>SKILLS</li>
                                <li className="nav-item" onClick={() => scrollToComponent(this.props.workHistory, { offset: -65, align: 'top', duration: 1000 })}>WORK HISTORY</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        }
    }
}

export default Navigation;