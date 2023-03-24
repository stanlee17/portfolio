import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'
// Free download of graphics library (two of PNGs in assets): https://illustrationz.design/
import notFound from '../assets/chill-illustrationz.png'

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
 
        <h2>Hmm...</h2>
        <p>Looks like you coded your way onto a hidden page!</p>
        <div className="notFoundCover">
          <img src={notFound} alt="notfound" />
        </div>
        <div className="homeBtn">
          <Link to="/">
            <FiHome id="btn-icon" />
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default NotFound