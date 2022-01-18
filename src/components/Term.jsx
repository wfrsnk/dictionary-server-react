import React from 'react';

const Term = ({ term, description }) => {
  return (
    <div className="container">
      <h2>{term}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default Term;
