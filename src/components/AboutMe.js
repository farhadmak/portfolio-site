import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="text-container">
          <h1>About me</h1>
          <div className="about-me-text">
            <p>My name is Farhad Makiabady and I graduated from the University of Alberta with a degree in Specialization in Computing Science. I have a few years of work experience in web developement consisting of React, Javascript and C#.</p>
            <p>I first got into the industry of computers and software development when I ran a huge online Minecraft game server. I started off by learning to read code and moved on to understanding the relationship between a client and a developer (me being the client).</p>
            <p>Through my education in university, I began understanding how things worked through a developer perspective. Whenever I’d learn something new in my classes, it often reminded me of the time I ran the server as I would finally understand the reasoning behind how something worked.</p>
            <p>During my free time I play piano, play soccer and work as a lifeguard. I enjoy being active regularly and hanging out with friends. </p>
            <p>If you’d like to chat, feel free to send me an email directly at makiabad@ualberta.ca</p>
            {/* /or use my form <a href="/contact">here</a>! */}
          </div>
        </div>
      </div>
    )
  }
}
export default AboutMe;