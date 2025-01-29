import React from 'react';
import './Popular.css';
import homeitems from '../assets/homeitems';
import Item from '../Item/Item';
const Popular = () => {
  return (
    <div>
      <div className="home">
      <p>Discount Upto 37%</p>
      <div className="home-items">
      {homeitems.map((item,i)=>{
          return<Item key={i} id={item.id} size={item.size}name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
      })}
      </div>
    </div>
    </div>
  )
}

export default Popular
