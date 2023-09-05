import React from 'react';
import background from '../../assets/background.webm';
import { TypeAnimation } from 'react-type-animation';

// Import sections
import About from '../../components/sections/About/About';
import Projects from '../../components/sections/Projects/Projects';
import Contact from '../../components/sections/Contact/Contact';

import MouseScroll from '../../components/common/MouseScroll/MouseScroll';

// Import styles
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <div id="home" className={styles.home}>
        <div className={styles.overlay}></div>
        <video className={styles.bg} autoPlay loop muted>
          <source src={background} type="video/webm" />
        </video>
        <div className={styles.hero}>
          <TypeAnimation
            sequence={["Hi, I'm Yves", 1000]}
            className={styles.heroHeading}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          />
          <TypeAnimation
            sequence={['Front End Developer', 1000]}
            className={styles.heroSub}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
            repeat={Infinity}
          />
          <MouseScroll />
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
