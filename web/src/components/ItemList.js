import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Internal Modules
import RepositoryItem from './RepositoryItem';
import Button from './Button';

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

  const handleClick = (e) => {
    const filterdItem = items.filter((i) => i.language === e.target.value);

    setItems(filterdItem);
  };

  const eachItem = items.map((i, index) => {
    const { name, language, description, forks_count } = i;
    return (
      <div key={index}>
        <RepositoryItem
          name={name}
          language={language}
          description={description}
          forksCount={forks_count}
        />
        <Button language={language} click={handleClick} />
      </div>
    );
  });
  return <div>{eachItem}</div>;
};

export default ItemList;
