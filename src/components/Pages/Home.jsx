import React from 'react';
import Hero from '../hero/hero';
import Popular from '../Popular/Popular';
import Category from '../Category/Category';


const Home = () => {
  return (
    <div className="home-container">
      <Category/>
      <Hero />
      <Popular/>
    </div>
  );
}

export default Home;