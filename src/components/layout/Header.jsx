// Import React modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import styles from './Header.module.scss';

// Import Bootstrap modules
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

// Hamburger React
import Hamburger from 'hamburger-react';

const inlineStyle = {
  navbar: {
    backgroundColor: '#212121',
    transition: 'all .7s ease-in-out',
  },
};

const Header = () => {
  const [bgColor, setBgColor] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={`sticky-top py-3 ${styles.navbar}`}
      style={bgColor ? inlineStyle.navbar : {}}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
          Yves
        </Navbar.Brand>
        <Hamburger size={25} toggle={handleShow} />
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
              onClick={handleClose}
              className={styles.offcanvasLink}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#"
              onClick={handleClose}
              className={styles.offcanvasLink}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#"
              onClick={handleClose}
              className={styles.offcanvasLink}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#"
              onClick={handleClose}
              className={styles.offcanvasLink}
            >
              Contact
            </Nav.Link>
          </Offcanvas.Body>
        </Offcanvas>

        <Nav className={`ms-end ${styles.navbarNav}`}>
          <Nav.Link as={Link} to="/" className={`me-4 ${styles.navLink}`}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/#about" className={`me-4 ${styles.navLink}`}>
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/#projects"
            className={`me-4 ${styles.navLink}`}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/#contact"
            className={`me-4 ${styles.navLink}`}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
