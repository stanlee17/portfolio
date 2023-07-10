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
            My journey began when I saw particular video about a YouTuber who
            managed to land a web developer job within just three months of
            self-teaching, without requiring a degree. This immediately sparked
            my interest in coding and by the time I completed high school, I had
            already developed a strong grasp of HTML, CSS, JavaScript, and even
            dabbled in React. Instead of going to university, I decided to take
            a TAFE course in{' '}
            <span>
              Diploma of Information Technology (Full Stack Development)
            </span>{' '}
            at Holmesglen to pursue my career as a web developer. I applied all
            the knowledge I gained during the course to build various projects,
            including this portfolio website and three other three projects,
            which you can explore in the projects section of this portfolio.
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
