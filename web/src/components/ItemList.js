import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/repos').then((res) => {
      setItems(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <h1>{items}</h1>
    </div>
  );
};

export default ItemList;
