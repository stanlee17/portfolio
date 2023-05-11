import React from 'react';
import ButtonLink from '../common/ButtonLink';
import { Container } from 'react-bootstrap';

// Import Styles
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <Container>
      <div className={styles.contact}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.paragraph}>
          I am currently looking for new opportunities so my inbox is always
          open. You could also give me a message on LinkedIn. Feel free to
          contact me and I will try to respond to you as soon as possible! Here
          is my email: <span>stanz.ferigh@gmail.com</span>
        </p>
        <ButtonLink url="#" className="me-4">
          LinkedIn
        </ButtonLink>
        <ButtonLink url="#" className="me-4">
          Email
        </ButtonLink>
        <ButtonLink target="_blank" url="https://github.com/stanlee17">
          GitHub
        </ButtonLink>
      </div>
    </Container>
  );
};

export default Contact;
