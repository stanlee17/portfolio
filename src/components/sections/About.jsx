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
            My journey started when I saw particular video about a youtuber
            getting a job as a web developer within 3 months self taught without
            needing a degree. This immediately piqued my interest in learning
            coding and by the time I finished high school, I already had a good
            grasp of HTML CSS, JavaScript and a bit of React. Instead of going
            to university, I decided to take a TAFE course in{' '}
            <span>
              Diploma of Information Technology (Full Stack Development)
            </span>{' '}
            in Holmesglen for a year to pursue my career as a web developer. I
            used all of the knowledge that I gained from that course and built
            projects such as this portfolio website and the other three projects
            that you can have a look at the projects section of this portfolio.
            Here are some the technologies that I have worked with:
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
