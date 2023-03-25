import React, { Fragment } from 'react';
import About from './About';
import background from '../assets/background.mp4';
import { TypeAnimation } from 'react-type-animation';

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
    </Fragment>
  );
};

export default Home;
