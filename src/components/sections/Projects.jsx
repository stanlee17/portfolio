import React from 'react';
import { Container } from 'react-bootstrap';

// Import common components
import Project from '../common/Project';

// Import assets
import MMOList from '../../assets/projects/mmolist.webp';
import Colorwind from '../../assets/projects/colorwind.webp';
import Arima from '../../assets/projects/arima.webp';
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
          title="Arima"
          description="A functional and visually appealing Anime Wiki application built with Next.js, enabling users to discover and explore top-rated, upcoming, and currently airing anime. Additionally, it includes a comprehensive search page feature that allows users to search for any anime available."
          image={Arima}
          techStack={['React.js', 'Next.js', 'React Bootstrap', 'Sass']}
          githubUrl="https://github.com/stanlee17/arima"
          liveUrl="https://thearima.vercel.app/"
        />
        <Project
          subtitle="Project Two"
          title="Colorwind"
          description="A color generator app designed to assist users in finding matching color palettes tailored to their specific requirements. This project was initially developed as part of my assessment during the 2nd semester of my diploma, and I have since added additional features to enhance its functionality."
          image={Colorwind}
          techStack={['React.js', 'Sass', 'Colormind API', 'React Context']}
          githubUrl="https://github.com/stanlee17/colorwind"
          liveUrl="http://colorwind.surge.sh/"
        />
        <Project
          subtitle="Project Three"
          title="MMOList"
          description="A full-stack MMORPG info application project created to provide users with the ability to explore a wide range of MMORPG games, including those in development, undergoing beta testing, or currently available to play. This project was completed as part of my assessment during the 1st semester of my diploma."
          image={MMOList}
          techStack={['Firebase', 'Express.js', 'React.js', 'Node.js']}
          githubUrl="https://github.com/stanlee17/mmolist"
          liveUrl="#"
        />
        <Project
          subtitle="Project Four"
          title="PayAPI"
          description="A 4-page mock company website built with the objective of gaining familiarity with the Tailwind CSS framework. The website's design was provided by frontendmentor.io as one of their advanced challenges."
          image={PayAPI}
          techStack={['React.js', 'Tailwind CSS', 'React Bootstrap']}
          githubUrl="https://github.com/stanlee17/payapi"
          liveUrl="https://payapi-5gi.pages.dev/"
        />
      </Container>
    </div>
  );
};

export default Projects;
