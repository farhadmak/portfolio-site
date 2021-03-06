import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import Particles from 'react-particles-js';
import particleFile from './particles.json';


function App() {
  return (
    <div className="background-test">
      <Layout>
        <Header className="nav-header" scroll>
          <Navigation className="home-link">
            <a className="hvr-wobble-skew" href="/">Farhad Makiabady</a>
          </Navigation>
          <Navigation className="nav-text">
            <a className="hvr-underline-from-center" href="/resume">Resume</a>
            <a className="hvr-underline-from-center" href="/projects">Projects</a>
            <a className="hvr-underline-from-center" href="/aboutme">About Me</a>
            <a className="hvr-underline-from-center" href="/contact">Contact</a>
          </Navigation>
        </Header>
        <Drawer>
          <Navigation>
            <a href="/">Farhad's Portfolio</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/aboutme">About Me</a>
            <a href="/contact">Contact</a>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
        <Particles className="particles"
            params={particleFile}
          />
      </Layout>

    </div>
  );
}

export default App;
