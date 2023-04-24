import React from 'react';

const Technology = ({ image, children, alt }) => {
  return (
    <div className="technology">
      <div className="technology-wrapper">
        <img src={image} alt={alt} className="technology-image" />
        <p className="technology-name">{children}</p>
      </div>
    </div>
  );
};

export default Technology;
