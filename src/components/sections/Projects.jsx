import React from 'react';
import { Container } from 'react-bootstrap';

// Import common components
import Project from '../common/Project';

// Import assets
import MMOList from '../../assets/projects/mmolist.webp';
import Colorwind from '../../assets/projects/colorwind.webp';
import v1 from '../../assets/projects/portfolio_v1.webp';
import PayAPI from '../../assets/projects/payapi.webp';

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
          description="A color generator app designed for users to find matching color palettes for their needs. This was one of my assessment project that I made during the 2nd semester of my diploma (added more features after that)"
          image={Colorwind}
          techStack={['React.js', 'Sass', 'Colormind API', 'React Context']}
          githubUrl="https://github.com/stanlee17/colorwind"
          liveUrl="http://colorwind.surge.sh/"
        />
        <Project
          subtitle="Project Two"
          title="MMOList"
          description="A full stack MMORPG info application project designed to allow users to explore a variety of MMORPG games that are either in development, going through beta testing, or available to play. This was one of my assessment project that I made during the 1st semester of my diploma."
          image={MMOList}
          techStack={['Firebase', 'Express.js', 'React.js', 'Node.js']}
          githubUrl="https://github.com/stanlee17/mmolist"
          liveUrl="#"
        />
        <Project
          subtitle="Project Three"
          title="PayAPI"
          description="A 4-page mock company website that are built for the purpose of getting familiar with the Tailwind CSS framework. The design of this website was provided by frontendmentor.io (one of the advanced challenges section)."
          image={PayAPI}
          techStack={['React.js', 'Tailwind CSS']}
          githubUrl="https://github.com/stanlee17/payapi"
          liveUrl="https://payapi-5gi.pages.dev/"
        />
        <Project
          subtitle="Project Four"
          title="Portfolio v1"
          description="First iteration of my portfolio website as you are probably looking right now, made primarily for projects showcase and other purposes (technical skills, contact info, about me etc)."
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
