import React, { Component } from 'react';
import profilePic from '../images/profile_pic.png'

class HomePage extends Component {
  render() {
    return (
      <div>
        <img className="profile-pic" src={profilePic} alt="Farhad" />
        <div className="text-container">
          <h1>Full Stack Software Developer</h1>
          <p>HTML/CSS | React | JavaScript | Python | C/C++ | Java</p>
        </div>
      </div>
    )
  }
}
export default HomePage;