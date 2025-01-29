import React from 'react';
import './hero.css';
import hero from '../assets/hero.jpeg';
const Hero = () => {
  return (
    <div>
      <div className="hero">
        
        <div className="hero-left">
          <p>Preserve Memories With High Quality printing</p>
    
        </div>

        <div className="hero-right">
          <img id="heroimg" src={hero} alt = "hero" />  
          </div>

      </div>
    </div>
  );
}

export default Hero;