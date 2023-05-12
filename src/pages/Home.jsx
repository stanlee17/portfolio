import React from 'react';
import background from '../assets/background.mp4';
import { TypeAnimation } from 'react-type-animation';

// Import sections
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

// Import styles
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <div className={styles.home}>
        <div className={styles.overlay}></div>
        <video className={styles.bg} src={background} autoPlay loop muted />
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
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
