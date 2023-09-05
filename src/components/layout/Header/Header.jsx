// Import React modules
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { pageScroller } from '../../../utils';
import { Container, Nav, Navbar } from 'react-bootstrap';

// Import offcanvas
import NavOffcanvas from '../NavOffcanvas/NavOffcanvas';

// Import Styles
import styles from './Header.module.scss';

const inlineStyle = {
  navbar: {
    backgroundColor: '#212121',
    transition: 'background-color .7s ease-out',
  },
};

const Header = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
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

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    setUrl(location.pathname);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={`sticky-top py-4 ${styles.navbar}`}
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
            activeClass="active"
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
