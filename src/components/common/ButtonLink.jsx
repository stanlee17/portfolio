import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ children, url, className }) => {
  return (
    <Link to={url} className={`button-link ${className}`}>
      {children}
    </Link>
  );
};

export default ButtonLink;
