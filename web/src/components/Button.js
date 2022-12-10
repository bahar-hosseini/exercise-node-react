import React from 'react';

const Button = ({ language, click }) => {
  return (
    <button value={language} onClick={click}>
      Filter by: {language}
    </button>
  );
};

export default Button;
