import React from 'react';
import { Container } from 'react-bootstrap';
import ButtonLink from '../../common/ButtonLink/ButtonLink';
import styles from './Frontendmentor.module.scss';
import RedCircle from '../../../assets/svg/red_circle.svg';
import YellowCircle from '../../../assets/svg/yellow_circle.svg';
import GreenCircle from '../../../assets/svg/green_circle.svg';
import { FrontendmentorData } from '../../../data/index';

const Frontendmentor = () => {
  return (
    <Container>
      <div className={styles.frontendMentor}>
        <h2 className={styles.heading}>Frontend Mentor Solutions</h2>
        <div className={styles.solutions}>
          {FrontendmentorData.map((item, index) => (
            <div key={index}>
              <div className={styles.imageWrapper}>
                <div className={styles.window}>
                  <div className={styles.windowButtons}>
                    <img src={RedCircle} alt="red-circle" />
                    <img src={YellowCircle} alt="yellow-circle" />
                    <img src={GreenCircle} alt="green-circle" />
                  </div>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
              </div>
              <h4 className={styles.title}>{item.title}</h4>
              <div className={styles.techStack}>
                {item.techStack.map((tech, index) => (
                  <p key={index} className={styles.tech}>
                    {tech}
                  </p>
                ))}
              </div>
              <ButtonLink url={item.github} className="me-4">
                View Code
              </ButtonLink>
              <ButtonLink url={item.websiteUrl}>View Website</ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Frontendmentor;
