import React from 'react';
import { Container } from 'react-bootstrap';
import ButtonLink from './ButtonLink';

const Featured = ({
  title,
  description,
  image,
  techStack,
  githubUrl,
  liveUrl,
  end,
}) => {
  return (
    <div className="featured">
      <Container>
        <div className="featured-wrapper">
          {end ? (
            <img className="featured-image me-5" src={image} alt={title} />
          ) : (
            ''
          )}
          <div className={`featured-content ${end ? 'text-end' : ''}`}>
            <h5>Featured Project</h5>
            <h3>{title}</h3>
            <div className="featured-desc">
              <p>{description}</p>
            </div>
            <div
              className={`featured-tech-stack ${
                end ? 'justify-content-end' : ''
              }`}
            >
              {techStack && techStack.map((tech) => <div>{tech}</div>)}
            </div>
            <ButtonLink url={githubUrl} className="me-4">
              View Code
            </ButtonLink>
            <ButtonLink url={liveUrl}>Website</ButtonLink>
          </div>
          {!end ? (
            <img className="featured-image ms-5" src={image} alt={title} />
          ) : (
            ''
          )}
        </div>
      </Container>
    </div>
  );
};

export default Featured;
