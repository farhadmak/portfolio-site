import React, { Component } from 'react';
import profilePic from '../images/profile_pic.png'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';

class HomePage extends Component {
    render() {
        return (
            <div>
                <img className="profile-pic" src={profilePic} alt="Farhad"/>
                <div className="text-container">
                    <div className="offset center">I'm Farhad Makiabady</div>
                    <div>
                    <AwesomeButton type="primary">Primary</AwesomeButton>
                    <AwesomeButton type="primary">Primary</AwesomeButton>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;