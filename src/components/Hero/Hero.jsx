import React from 'react';
import { Header } from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';



const Hero = () => {
 

  return (
    <div className="hero" id='hero'>

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
       
       <div className="the-best-ad">
        
        <div></div>
        <span>Club de sport situé à Cormery</span>
       </div>

       <div className="hero-text">
        <div>
          <span className='stroke-text'>Néo</span>
          <span>Forme</span>
        </div>
        
        <div>
          <span>
            NEO FORME CARRICO
            </span>
        </div>
       </div>

       <div className="figures">
        <div>
          <span>3</span>
          <span>Coach Diplomés</span>
        </div>
        <div>
          <span>+200</span>
          <span>membres de la salle</span>
        </div>
       </div>

      </div>
      <div className="right-h">
        <img src={hero_image} alt="" className="hero-image"/>
        <img src={hero_image_back} alt="" className="hero-image_back"/>
      </div>
    </div>
  )
}

export default Hero