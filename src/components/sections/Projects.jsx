import React from 'react';
import Featured from '../common/Featured';
import MMOList from '../../assets/mmolist.png';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Some Things That I've Built</h2>
      <Featured
        title="MMOList"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        ipsum nesciunt iure, nulla recusandae tenetur, nemo possimus esse
        veritatis architecto aperiam quisquam placeat? Animi, accusamus suscipit
        mollitia corporis dignissimos quisquam!"
        image={MMOList}
        techStack={[
          'React.js',
          'Firebase',
          'Express.js',
          'Node.js',
          'Styled Components',
        ]}
        githubUrl="https://github.com/stanlee17/mmolist"
        liveUrl="#"
        end
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
