import React from 'react';

// Import common components
import Featured from '../common/Featured';

// Import assets
import MMOList from '../../assets/mmolist.png';

// Import styles
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>Featured Projects</h2>
      <Featured
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
      <Featured
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
    </div>
  );
};

export default Projects;
