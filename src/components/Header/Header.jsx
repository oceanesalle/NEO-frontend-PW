import React from 'react';
import "./Header.css";
import Logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
          <li>Accueil</li>
          <li>Planning fitness</li>
          <li>Réservation de cours</li>
          <li>Musculation</li>
          <li>Tarif</li>
          <li>Contact</li>
        </ul>


    </div>
  )
}
