import React from 'react';
import Hero from '../hero/hero';
import Popular from '../Popular/Popular';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';


const Home = () => {
  return (
    <div className="home-container">
      <Category/>
      <Hero />
      <Popular/>
    <Review/>

      <Footer/>

    </div>
  );
}

export default Home;