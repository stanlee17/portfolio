import React from 'react';
import { Container } from 'react-bootstrap';

// Import common components
import Project from '../common/Project';

// Import assets
import MMOList from '../../assets/mmolist.png';

// Import styles
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Container>
        <h2 className={styles.heading}>Top Projects</h2>
        <Project
          subtitle="Project One"
          title="MMOList"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        ipsum nesciunt iure, nulla recusandae tenetur, nemo possimus esse
        veritatis architecto aperiam quisquam placeat? Animi, accusamus suscipit
        mollitia corporis dignissimos quisquam!"
          image={MMOList}
          techStack={['React.js', 'Firebase', 'Express.js', 'Node.js']}
          githubUrl="https://github.com/stanlee17/mmolist"
          liveUrl="#"
        />
        <Project
          subtitle="Project Two"
          title="Colorwind"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        ipsum nesciunt iure, nulla recusandae tenetur, nemo possimus esse
        veritatis architecto aperiam quisquam placeat? Animi, accusamus suscipit
        mollitia corporis dignissimos quisquam!"
          image={MMOList}
          techStack={['React.js', 'Sass', 'Colormind API']}
          githubUrl="https://github.com/stanlee17/colorwind"
          liveUrl="#"
        />
      </Container>
    </div>
  );
};

export default Projects;
