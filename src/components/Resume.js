import React, { Component } from 'react';

class Resume extends Component {

  render() {
    return (
      <div>
        <div className="text-container">
          <h1>Resume</h1>
        </div>
        <div id="iframe-container">
          <iframe id="resume-iframe" title="resume" 
            width="100%" height="100%" 
            src="https://drive.google.com/file/d/1AxzKQTkcX-1EEHfneo9kGY2LMz-1iaaZ/preview"
      
            frameborder="0" allowfullscreen="">
          </iframe>
        </div>
      </div>
    )
  }
}
export default Resume;
