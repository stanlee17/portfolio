import React from 'react';
import { Container } from 'react-bootstrap';

// Import common components
import Technology from '../../common/Technology/Technology';

// Import styles
import styles from './About.module.scss';

// Import tech logos
import HTML from '../../../assets/svg/html5.svg';
import CSS from '../../../assets/svg/css3.svg';
import Tailwind from '../../../assets/svg/tailwindcss.svg';
import Bootstrap from '../../../assets/svg/bootstrap.svg';
import Javascript from '../../../assets/svg/javascript.svg';
import Reactjs from '../../../assets/svg/react.svg';
import Next from '../../../assets/svg/next.svg';
import Typescript from '../../../assets/svg/typescript.svg';
import Sass from '../../../assets/svg/sass.svg';
import Node from '../../../assets/svg/nodejs.svg';
import Express from '../../../assets/svg/express.svg';
import Firebase from '../../../assets/svg/firebase.svg';
import MongoDB from '../../../assets/svg/mongodb.svg';

const About = () => {
  return (
    <Container>
      <div id="about" className={styles.about}>
        <div className={styles.aboutMe}>
          <h2 className={styles.heading}>Nice to meet you</h2>
          <p className={styles.paragraph}>
            Hello, My name is Yves but you can also call me Stan if you prefer.
            I am a detail oriented software developer with a main focus on
            front-end development. I am always excited to learn new technologies
            as I love exploring new concepts, tools and frameworks in order to
            use them personally and professionally. Aside from that, I also
            enjoy fitness, watching anime and playing video games in my spare
            time. Here are some of the technologies that I am familiar with:
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
