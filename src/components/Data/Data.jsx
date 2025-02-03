import React from 'react';
import Item from '../Item/Item';
import all_products from '../assets/all_product';
import './Data.css';

const Data = () => {
  return (
    <div className="data-container">
      {all_products.map((product, index) => (
        <Item key={index} item={product} />
      ))}
    </div>
  );
}

export default Data;
