import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <div className="about">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Hello, My name is Yves but you can also call me Stan if you prefer.
            Front end development is my specialty as I am more design oriented.
            Seeing that I am able to create a design and make that a reality to
            the internet excites me. I’m always willing to learn new
            technologies and use them to build more projects. Aside from that, I
            also enjoy fitness, watching anime and playing video games in my
            spare time. Anyway, here are some of the technologies that I've been
            working with.
          </p>
          <div className="about-skills">
            <div className="tech-name">HTML & CSS</div>
            <div className="tech-name">JavaScript</div>
            <div className="tech-name">React.js</div>
            <div className="tech-name">Node.js</div>
            <div className="tech-name">Express.js</div>
            <div className="tech-name">Firebase</div>
            <div className="tech-name">MongoDB</div>
            <div className="tech-name">TypeScript</div>
            <div className="tech-name">GraphQL</div>
            <div className="tech-name">Styled Components</div>
            <div className="tech-name">Sass</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
