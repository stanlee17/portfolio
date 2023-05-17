import React from 'react';
import { Container } from 'react-bootstrap';

// Import common components
import Project from '../common/Project';

// Import assets
import MMOList from '../../assets/projects/mmolist.png';
import Colorwind from '../../assets/projects/colorwind.png';
import v1 from '../../assets/projects/portfolio_v1.png';
import PayAPI from '../../assets/projects/payapi.png';

// Import styles
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <Container>
        <h2 className={styles.heading}>Top Projects</h2>
        <Project
          subtitle="Project One"
          title="Colorwind"
          description="A color generator app powered by Colormind API, designed for users to find matching color palettes for their needs. This is one of my assessment project that I made during 1st semester of my diploma (added more features after that) and is by far one of the most time consuming but proudest front-end project that I made."
          image={Colorwind}
          techStack={['React.js', 'Sass', 'Colormind API', 'React Context']}
          githubUrl="https://github.com/stanlee17/colorwind"
          liveUrl="http://colorwind.surge.sh/"
        />
        <Project
          subtitle="Project Two"
          title="MMOList"
          description="An MMORPG info app that I made during my 2nd semester of my diploma. This app is designed to allow users to explore a variety of MMORPG games that are either in development, going through beta testing, or available to play. Logged in users are also able to contribute by adding new MMORPG games that are not yet listed."
          image={MMOList}
          techStack={['Firebase', 'Express.js', 'React.js', 'Node.js']}
          githubUrl="https://github.com/stanlee17/mmolist"
          liveUrl="#"
        />
        <Project
          subtitle="Project Three"
          title="PayAPI"
          description="A 4-page mock company website that are built for the purpose of getting familiar with the Tailwind CSS framework. The design of this website was listed in one of the advanced challenges on frontendmentor.io. I was especially proud of this project as I was able to replicate from a Figma design to React.js + Tailwind successfully."
          image={PayAPI}
          techStack={['React.js', 'Tailwind CSS']}
          githubUrl="https://github.com/stanlee17/payapi"
          liveUrl="https://payapi-5gi.pages.dev/"
        />
        <Project
          subtitle="Project Four"
          title="Portfolio v1"
          description="First iteration of my portfolio website as you are looking right now, made primarily for projects showcase and other purposes (technical skills, contact info, about me etc)."
          image={v1}
          techStack={['React.js', 'Sass', 'React Bootstrap', 'Framer Motion']}
          githubUrl="https://github.com/stanlee17/portfolio"
          liveUrl="https://yveskoesumo.com"
        />
      </Container>
    </div>
  );
};

export default Projects;
