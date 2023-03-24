import React from 'react';
import About from './About';
import background from '../assets/background.mp4';

const Home = () => {
  return (
    <div className="home">
      <div className="home-overlay"></div>
      <video className="home-bg" src={background} autoPlay loop />
      <div className="home-hero">
        <h1>Hi, I'm Yves</h1>
        <h4>Web Developer</h4>
      </div>
      <About />
    </div>
  );
};

export default Home;
