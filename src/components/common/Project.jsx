import React from 'react';
import ButtonLink from './ButtonLink';

// Import styles
import styles from './Project.module.scss';

const Featured = ({
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
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.content}>
          <h5 className={styles.subtitle}>{subtitle}</h5>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.descOverlay}>
            <p className={styles.desc}>{description}</p>
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

export default Featured;
