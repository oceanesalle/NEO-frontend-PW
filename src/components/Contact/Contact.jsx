import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ls171c4', form.current, 'LVL-3N7_BAKQwKDGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id ='contact'>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <h2>Contactez-nous</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>neoforme@gmail.com</h5>
             <a href="mailto:neoforme@gmail.com" target="_blank" rel="noreferrer">Envoyez un message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyez un message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact