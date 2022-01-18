import React from 'react';

const Button = ({ dopClass, value, setActive, children }) => {
  return (
    <div className="btn">
      <button className={'button'} onClick={() => setActive(value)}>
        {children}
      </button>
    </div>
  );
};

export default Button;
