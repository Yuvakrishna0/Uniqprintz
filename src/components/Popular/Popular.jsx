import React from "react";
import "./Popular.css";
import homeitems from "../assets/homeitems";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div>
      <div className="home">
        <p>Discount Upto 37%</p>
        <div className="home-items">
          {homeitems.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
