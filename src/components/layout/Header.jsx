// Import React modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import styles from './Header.module.scss';

// Import Bootstrap modules
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const inlineStyle = {
  navbar: {
    backgroundColor: '#212121d3',
    transition: 'all .7s ease-in-out',
  },
};

const Header = () => {
  const [bgColor, setBgColor] = useState(false);

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
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* LEFT MAIN NAVS */}
          <Nav className="ms-end">
            <Nav.Link as={Link} to="/" className={`me-4 ${styles.navLink}`}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#about"
              className={`me-4 ${styles.navLink}`}
            >
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
