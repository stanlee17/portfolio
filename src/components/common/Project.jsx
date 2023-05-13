import React from 'react';
import ButtonLink from './ButtonLink';

// Import images
import RedCircle from '../../assets/svg/red_circle.svg';
import YellowCircle from '../../assets/svg/yellow_circle.svg';
import GreenCircle from '../../assets/svg/green_circle.svg';

// Import styles
import styles from './Project.module.scss';

const Project = ({
  subtitle,
  title,
  description,
  image,
  techStack,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <div className={styles.window}>
            <div className={styles.windowButtons}>
              <img src={RedCircle} alt="red-circle" />
              <img src={YellowCircle} alt="yellow-circle" />
              <img src={GreenCircle} alt="green-circle" />
            </div>
          </div>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h5>{subtitle}</h5>
          <h3>{title}</h3>
          <div className={styles.descOverlay}>
            <p>{description}</p>
          </div>
          <div className={styles.techStack}>
            {techStack &&
              techStack.map((tech) => (
                <div className={styles.tech}>{tech}</div>
              ))}
          </div>
          <ButtonLink url={githubUrl} className="me-4">
            View Code
          </ButtonLink>
          <ButtonLink url={liveUrl}>View Website</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Project;
