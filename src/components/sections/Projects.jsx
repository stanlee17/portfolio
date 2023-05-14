import React from 'react';
import { Container } from 'react-bootstrap';

// Import common components
import Project from '../common/Project';

// Import assets
import MMOList from '../../assets/projects/mmolist.png';
import Colorwind from '../../assets/projects/colorwind.png';
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
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        ipsum nesciunt iure, nulla recusandae tenetur, nemo possimus esse
        veritatis architecto aperiam quisquam placeat? Animi, accusamus suscipit
        mollitia corporis dignissimos quisquam!"
          image={Colorwind}
          techStack={['React.js', 'Sass', 'Colormind API']}
          githubUrl="https://github.com/stanlee17/colorwind"
          liveUrl="#"
        />
        <Project
          subtitle="Project Two"
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
          subtitle="Project Three"
          title="PayAPI"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        ipsum nesciunt iure, nulla recusandae tenetur, nemo possimus esse
        veritatis architecto aperiam quisquam placeat? Animi, accusamus suscipit
        mollitia corporis dignissimos quisquam!"
          image={PayAPI}
          techStack={['React.js', 'Tailwind CSS']}
          githubUrl="https://github.com/stanlee17/payapi"
          liveUrl="#"
        />
      </Container>
    </div>
  );
};

export default Projects;
