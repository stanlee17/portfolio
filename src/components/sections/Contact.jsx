import React from 'react';
import ButtonLink from '../common/ButtonLink';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <div className="contact">
        <h2>Get In Touch</h2>
        <p>
          I am currently looking for job opportunities so my inbox is always
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
        <ButtonLink url="#" className="me-4">
          GitHub
        </ButtonLink>
      </div>
    </Container>
  );
};

export default Contact;
