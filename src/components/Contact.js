import React, { Component } from 'react';
import '../assets/styles/Contact.css';
import { Row, Col } from 'react-flexbox-grid';

class Contact extends Component {
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
        if (['sm', 'md', 'lg'].indexOf(this.props.bootstrapBreakpoint) > -1) {
            leftColClass = "column left";
            rightColClass = 'column right'
        } else {
            leftColClass = "column right centerText"
            rightColClass = 'column right centerText'
        }
        if (['sm', 'md', 'lg'].indexOf(this.props.bootstrapBreakpoint) > -1) {
            workRowClass = "workRow"
        } else {
            workRowClass = "workRowSmall"
        }
        this.setState({ leftColClass: leftColClass, rightColClass: rightColClass, workRowClass: workRowClass })
    }
    navigateSocial(platform){
        var platformLinks = {
            'facebook': 'https://www.facebook.com/justin.pritchard5',
            'instagram': 'https://www.instagram.com/jpritchard9518/',
            'linkedIn': 'https://www.linkedin.com/in/justin-pritchard-11a9b7a5/',
            'email': 'mailto:jpritchard9518@gmail.com',
        }
        var location = platformLinks[platform]
        var target = (platform === 'email') ? '_top' : '_blank';
        var win = window.open(location, target);
        win.focus();
        
    }
    render() {
        return (
            <div className="Contact">
                <div style={{ height: 0 }}>
                    <p className="backgroundText1">Contact</p>
                </div>
                <div style={{ height: 0 }}>
                    <p className="backgroundText2">Contact</p>
                </div>
                <p className="header">Let's Talk</p>
                <hr />
                <p className="paragraph">For inquires please contact me by phone or email or stay connected by following me on Facebook, Instagram, and LinkedIn</p>
                <Row className={this.state.workRowClass}>
                    <Col className={this.state.leftColClass} xs={12} sm={12} md={6} lg={6}>
                        <div style={{width: '50px',height:'50px', margin: '0 auto', overflow: 'hidden'}}>
                            <img alt="phone" src='./assets/images/icons/contactIcons.svg' className="phone" />
                        </div>
                        
                        <p>308-641-2361</p>
                    </Col>
                    <Col className={this.state.rightColClass} xs={12} sm={12} md={6} lg={6}>
                        <div onClick={() => this.navigateSocial('email')} style={{ width: '50px', height: '50px', margin: '0 auto', overflow: 'hidden' }}>
                            <img alt="email" src='./assets/images/icons/contactIcons.svg' className="email" />
                        </div>
                        <p className="emailAddress">jpritchard9518@gmail.com</p>
                    </Col>
                </Row>
                <div className="socialRow">
                    <div onClick={() => this.navigateSocial('facebook')} style={{ width: '50px', height: '50px', overflow: 'hidden', display: 'inline-block', margin: '30px'}}>
                        <img alt="facebook" src='./assets/images/icons/facebook.svg' className="facebook" />
                    </div>
                    <div onClick={() => this.navigateSocial('instagram')} style={{ width: '50px', height: '50px', overflow: 'hidden', display: 'inline-block', margin: '30px'}}>
                        <img alt="instagram" src='./assets/images/icons/facebook.svg' className="instagram" />
                    </div>
                    <div onClick={() => this.navigateSocial('linkedIn')} style={{ width: '50px', height: '50px', overflow: 'hidden', display: 'inline-block', margin: '30px'}}>
                        <img alt="linkedIn" src='./assets/images/icons/facebook.svg' className="linkedIn" />
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Contact;