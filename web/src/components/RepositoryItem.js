import React from 'react';
import './styles/RepositoryItem.css';

const RepositoryItem = ({ name, language, description, forksCount }) => {
  return (
    <div className="container">
      <div
        className="repoContainer"
        onClick={() => alert("It's now Clickable")}
      >
        <h3>name: {name}</h3>
        <h3>language: {language}</h3>
        <h3>forks count:{forksCount}</h3>
        <p>{description && `Description: ${description}`}</p>
      </div>
    </div>
  );
};

export default RepositoryItem;
