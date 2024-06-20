import React from 'react';
import { Link } from 'react-router-dom';


const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <Link to={`/item/${item.id}`}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <img src={item.image} alt={item.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
