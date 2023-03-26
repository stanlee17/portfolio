import React, { Fragment } from 'react';
import background from '../assets/background.mp4';
import { TypeAnimation } from 'react-type-animation';

import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <div className="home-overlay"></div>
        <video className="home-bg" src={background} autoPlay loop muted />
        <div className="home-hero">
          <TypeAnimation
            sequence={["Hi, I'm Yves", 1000]}
            style={{ fontSize: '3rem', color: '#ffffff' }}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          />
          <TypeAnimation
            sequence={['Front End Developer', 1000]}
            style={{ fontSize: '1.6rem', color: '#ff7c7c' }}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
            repeat={Infinity}
          />
        </div>
      </div>
      <About />
      <Projects />
    </Fragment>
  );
};

export default Home;
