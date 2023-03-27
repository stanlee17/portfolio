import React from 'react';
import background from '../assets/background.mp4';
import { TypeAnimation } from 'react-type-animation';

import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-overlay"></div>
        <video className="home-bg" src={background} autoPlay loop muted />
        <div className="home-hero">
          <TypeAnimation
            sequence={["Hi, I'm Yves", 1000]}
            className="home-hero-heading"
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          />
          <TypeAnimation
            sequence={['Front End Developer', 1000]}
            className="home-hero-sub"
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
            repeat={Infinity}
          />
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
