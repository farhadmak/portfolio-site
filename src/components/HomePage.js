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
          <div className="social-links">
            <a href="https://github.com/farhadmak" target="_blank">
              <span className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/farhad-makiabady/" target="_blank">
              <span className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage;