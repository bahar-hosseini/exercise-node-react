import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Internal Modules
import RepositoryItem from './RepositoryItem';

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('/repos').then((res) => {
      const sortedData = res.data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setItems(sortedData);
    });
  }, []);

  const eachItem = items.map((i, index) => {
    const { name, language, description, forks_count } = i;
    return (
      <RepositoryItem
        key={index}
        name={name}
        language={language}
        description={description}
        forksCount={forks_count}
      />
    );
  });
  return <div>{eachItem}</div>;
};

export default ItemList;
