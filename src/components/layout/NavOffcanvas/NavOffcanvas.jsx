import React from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Nav } from 'react-bootstrap';

// Import Styles
import styles from './NavOffcanvas.module.scss';

const NavOffcanvas = ({ show, setShow, pageScroller }) => {
  const handleClose = () => setShow(false);

  const handleLink = (to, offset) => {
    pageScroller(to, offset);
    setShow(false);
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className={styles.offcanvas}
    >
      <Offcanvas.Header
        className={`btn-close-white ${styles.offcanvasHeader}`}
        closeButton
      >
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.offcanvasBody}>
        <Nav.Link
          as={Link}
          to="/"
          onClick={() => handleLink('home', -70)}
          className={styles.offcanvasLink}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          onClick={() => handleLink('about', -70)}
          className={styles.offcanvasLink}
        >
          About
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="#"
          onClick={() => handleLink('projects', -70)}
          className={styles.offcanvasLink}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="#"
          onClick={() => handleLink('contact', -70)}
          className={styles.offcanvasLink}
        >
          Contact
        </Nav.Link>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavOffcanvas;
