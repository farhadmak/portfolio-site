import React, { Component } from 'react';
import profilePic from '../images/profile_pic.png'

class HomePage extends Component {
    render() {
        return (
            <div>
                <img className="profile-pic" src={profilePic} alt="Farhad"/>
                <div className="text-container">
                    <div className="offset center">I'm Farhad Makiabady. This is a test message</div>
                </div>
            </div>
        )
    }
}
export default HomePage;