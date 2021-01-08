import React from "react";
import './kontakt.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faAt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Kontakt = () => {
  return (
    <section className='contact'>
    <address className='contact__address'>
        
    <div className='contact__address__location'><FontAwesomeIcon icon={faMapMarkerAlt}/><span className='fastSpace'/>ul. Panieńska 11 03-704 Warszawa</div>

        <span style={{textDecoration:'underline' }}>SEKRETARIAT:</span>
        <div className='contact__address__phone'><FontAwesomeIcon icon={faPhone}/><a className='contact__number' href = 'tel:0226702100'><span className='fastSpace'/>(22) 670-21-00</a></div>
        <div className='contact__address__mail'><FontAwesomeIcon icon={faAt}/><a className='contact__mail' href="mailto:poczta@maxfilm.com.pl">
        <span className='fastSpace'/>poczta@maxfilm.com.pl</a></div>
        <span style={{textDecoration:'underline'}}>KONTAKT DLA MEDIÓW:</span>
        <div className='contact__address__mail'><FontAwesomeIcon icon={faEnvelope}/><a className='contact__mail' href="mailto:biuroprasowe@maxfilm.com.pl">
        <span className='fastSpace'/>biuroprasowe@maxfilm.com.pl</a></div>
      </address>
    <iframe className='contact__map' title='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.5852361654865!2d21.024537916112205!3d52.25091687976431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc422251dc4d%3A0xda94641f258e009e!2sPanie%C5%84ska%2011%2C%2003-704%20Warszawa!5e0!3m2!1spl!2spl!4v1609176949341!5m2!1spl!2spl" width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0">
    </iframe>
    </section>
  );
};

export default Kontakt;
