// Import React modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { scroller } from 'react-scroll';
import { Container, Nav, Navbar } from 'react-bootstrap';

// Import offcanvas
import NavOffcanvas from './NavOffcanvas';

// Import Styles
import styles from './Header.module.scss';

const inlineStyle = {
  navbar: {
    backgroundColor: '#212121',
    transition: 'background-color .7s ease-out',
  },
};

const Header = () => {
  const [bgColor, setBgColor] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  const pageScroller = (to, offset) => {
    scroller.scrollTo(to, {
      smooth: true,
      spy: true,
      offset,
      duration: 0,
    });
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
        <Navbar.Brand
          as={Link}
          to="/"
          className={styles.navbarBrand}
          onClick={() => pageScroller('home', -70)}
        >
          Yves
        </Navbar.Brand>
        <Hamburger size={25} toggle={handleShow} />
        {/* Offcanvas */}
        <NavOffcanvas
          show={show}
          setShow={setShow}
          pageScroller={pageScroller}
        />

        <Nav className={`ms-end ${styles.navbarNav}`}>
          <Nav.Link
            as={Link}
            to="/"
            className={`me-4 ${styles.navLink}`}
            onClick={() => pageScroller('home', -70)}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="#about"
            className={`me-4 ${styles.navLink}`}
            onClick={() => pageScroller('about', -70)}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="#projects"
            className={`me-4 ${styles.navLink}`}
            onClick={() => pageScroller('projects', -70)}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="#contact"
            className={`me-4 ${styles.navLink}`}
            onClick={() => pageScroller('contact', -70)}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
