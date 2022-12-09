import React from 'react';

const RepositoryItem = ({ name, language, description, forksCount }) => {
  return (
    <div>
      <h3>name: {name}</h3>
      <h3>language: {language}</h3>
      <h3>forks count:{forksCount}</h3>
      <p>description: {description}</p>
    </div>
  );
};

export default RepositoryItem;
