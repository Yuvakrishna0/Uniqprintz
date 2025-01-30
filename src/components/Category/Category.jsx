import React from 'react';
import './Category.css';

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-bar">
        <p className="category-text">Categories</p>
        <div className="dropdown-menu">
          <ul>
            <li>Posters & Magazines</li>
            <li>Exclusive Diaries</li>
            <li>Photoframes</li>
            <li>Pens & Stationaries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
