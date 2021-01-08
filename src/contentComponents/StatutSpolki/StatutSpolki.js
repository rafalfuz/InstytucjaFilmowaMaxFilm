import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import './statutSpolki.scss'


const StatutSpolki = () => {

  const linkVariable = 'http://maxfilm.com.pl/userfiles/STATUT_do_BIP.pdf'

  return (
    <section className='statut'>
    <div className='statut__icon'><FontAwesomeIcon icon={faFilePdf}/></div>
    <a className='statut__link' href={linkVariable} target='blank' rel="noopener noreferrer">Status spółki PDF</a>
    </section>
  );
};

export default StatutSpolki;
