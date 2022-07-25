import React from 'react';
import './Footer.css'; 
import instagram from "../../assets/instagram.png"; 
import facebook from "../../assets/facebook.png";
import mail from "../../assets/mail.png";
import Logo from "../../assets/logo.png"; 


const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={mail} alt="" />
      </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer