import React from 'react';
import './hero.css';
import book from '../assets/books-hero.jpg';
import diary from '../assets/diary-hero.jpg';
import pen from '../assets/pens-hero.jpg';
import pframe from '../assets/photoframe-hero.jpg';

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="grid-item">
          <img src={book} alt="book" />
          <div className="overlay">
            <p className="overlay-text">Get customized posters and magazines</p>
          </div>
        </div>

        <div className="grid-item">
          <img src={diary} alt="diary" />
          <div className="overlay">
            <p className="overlay-text">Gift the exclusive Diaries</p>
          </div>
        </div>

        <div className="grid-item">
          <img src={pframe} alt="photoframe" />
          <div className="overlay">
            <p className="overlay-text">Get customized Photoframes</p>
          </div>
        </div>

        <div className="grid-item">
          <img src={pen} alt="pen" />
          <div className="overlay">
            <p className="overlay-text">Pens and other stationaries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
