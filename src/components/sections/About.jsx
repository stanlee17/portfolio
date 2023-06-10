import React from 'react';
import { Container } from 'react-bootstrap';
// import { motion } from 'framer-motion';

// Import common components
import Technology from '../common/Technology';

// Import styles
import styles from './About.module.scss';

// Import tech logos
import HTML from '../../assets/svg/html5.svg';
import CSS from '../../assets/svg/css3.svg';
import Tailwind from '../../assets/svg/tailwindcss.svg';
import Bootstrap from '../../assets/svg/bootstrap.svg';
import Javascript from '../../assets/svg/javascript.svg';
import Reactjs from '../../assets/svg/react.svg';
import Next from '../../assets/svg/next.svg';
import Typescript from '../../assets/svg/typescript.svg';
import Sass from '../../assets/svg/sass.svg';
import Node from '../../assets/svg/nodejs.svg';
import Express from '../../assets/svg/express.svg';
import Firebase from '../../assets/svg/firebase.svg';
import MongoDB from '../../assets/svg/mongodb.svg';

const About = () => {
  return (
    <Container>
      <div id="about" className={styles.about}>
        <div className={styles.aboutMe}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.paragraph}>
            Hello, my name is <span>Yves</span>, but feel free to call me{' '}
            <span>Stan</span>. I am a web developer with a strong emphasis on
            <span> front-end development</span>. The process of transforming
            designs into functional realities on the internet fascinates me. I
            have an unwavering eagerness to learn new technologies and employ
            them to create visually appealing, functional, and innovative
            projects. Besides my passion for web development, I enjoy fitness,
            watching anime, and playing video games in my spare time. Here are
            some of the technologies I have experience working with:
          </p>
          <div className={styles.skills}>
            <Technology image={HTML} alt="html5">
              HTML
            </Technology>
            <Technology image={CSS} alt="CSS3">
              CSS
            </Technology>
            <Technology image={Tailwind} alt="Tailwind">
              Tailwind
            </Technology>
            <Technology image={Bootstrap} alt="bootstrap">
              Bootstrap
            </Technology>
            <Technology image={Javascript} alt="javascript">
              Javascript
            </Technology>
            <Technology image={Reactjs} alt="reactjs">
              React
            </Technology>
            <Technology image={Next} alt="Next">
              Next
            </Technology>
            <Technology image={Typescript} alt="typescript">
              Typescript
            </Technology>
            <Technology image={Sass} alt="sass">
              Sass
            </Technology>
            <Technology image={Node} alt="nodejs">
              Node
            </Technology>
            <Technology image={Express} alt="express">
              Express
            </Technology>
            <Technology image={Firebase} alt="firebase">
              Firebase
            </Technology>
            <Technology image={MongoDB} alt="mongodb">
              MongoDB
            </Technology>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
