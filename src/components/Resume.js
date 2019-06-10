import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import resumepdf from '../docs/pdf/resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component {

  state = {
    numPages: 2,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div className="text-container">
          <h1>Resume</h1>
        </div>
        <Document
          file={resumepdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
          >
          <Page pageNumber={pageNumber} />
          <Page pageNumber={numPages} />
        </Document>
      </div>
    )
  }
}
export default Resume;