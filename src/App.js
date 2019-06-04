import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import Particles from 'react-particles-js';
import particleFile from './particles.json';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Farhad's Portfolio" scroll>
          <Navigation>
            <a href="/">Farhad's Profile</a>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/aboutme">About Me</a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
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
