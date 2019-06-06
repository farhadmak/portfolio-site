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
            <a href="/">Farhad's Portfolio</a>
          </Navigation>
            <Navigation className="nav-text">
              <a href="/resume">Resume</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
              <a href="/aboutme">About Me</a>
            </Navigation>
        </Header>
        <Drawer>
          <Navigation>
            <a href="/">Farhad's Portfolio</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/aboutme">About Me</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Particles
            params={particleFile}
          />
          <Main />
        </Content>
      </Layout>

    </div>
  );
}

export default App;
