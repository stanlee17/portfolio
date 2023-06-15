import React from 'react';
import { Container } from 'react-bootstrap';

// Import common components
import Technology from '../common/Technology/Technology';

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
            Welcome to my Portfolio site! I'm Yves, a <span>web developer</span>{' '}
            with a passion for transforming designs into functional realities on
            the internet. I specialize in creating visually appealing and user
            responsive projects that provides seamless user experiences. With a
            keen eye for detail and an eagerness to learn, I stay up to date
            with the latest technologies to enhance my development skills.
            Alongside my expertise in web development, I'm also an avid fitness
            enthusiast and enjoy indulging in anime and video games during my
            spare time. Here are some of the technologies I have experience
            with:
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
