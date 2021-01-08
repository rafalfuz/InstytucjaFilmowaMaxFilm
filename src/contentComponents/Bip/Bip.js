import React from "react";
import './bip.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Bip = () => {

  const linkVariable = 'http://www.maxfilm.com.pl/userfiles/STATUT_do_BIP.pdf'

  const ourTargets = [
    "udostępnianie zasobów kinematografii narodowej i popularnej,",
    "realizowanie programu edukacji filmowej, ",
    "wspieranie lokalnych inicjatyw z zakresu kinematografii, kultury i sztuki, ",
    "wspieranie niezależnych twórców, ",
    "dystrybucja filmów, ",
    "rozszerzenie działalności dzięki współpracy z kinami tradycyjnymi oraz budowie nowych, wielosalowych kin na terenie całej Polski.",
  ];
  const targets = ourTargets.map((target) => <li className='concept__list__item' key={target}>{target}</li>);
  return (

    <section className="bip">
      <article className='bip__office studio'>
        
        <div className='studio__imageHeadquater'><FontAwesomeIcon icon={faAddressCard}/></div>
        
        <address className='studio__addressHeadquater headquater'>
          <h2 className='headquater__name'>Instytucja Filmowa Max-film S.A.</h2>
          <h3 className='headquater__title'>Adres podmiotu</h3>
          <p className='headquater__default headquater__default--street'>ul. Panieńska 11</p>
          <p className='headquater__default headquater__default--postcode' >03-702 Warszawa</p> 
          <p className='headquater__default'>Województwo: Mazowieckie</p>
          <p className='headquater__default'>Powiat: m. st. Warszawa</p>
          <p className='headquater__default'>Gmina: Praga-Północ</p>
          <p className='headquater__default'>Poczta: 4</p>
          <p className='headquater__default'>Telefon:</p>
          <div className='headquater__default headquater__default--phone'><a href='tel:0226702100'>0-22 670-21-00</a></div>
          <p className='headquater__default'>Adres e-mail:</p>
          <div className='headquater__default headquater__default--mail'><a href='mailto:maxfilm@maxfilm.com.pl'>maxfilm@maxfilm.com.pl</a></div>
        </address>
        

        <address className='studio__addressRedaction redaction'>
            <h3 className='redaction__title'>Redakcja</h3>
            <p className='redaction__default'>Telefon:</p>
            <div className='redaction__default redaction__default--phone'><a href='tel:0226702100'>0-22 670-21-00</a></div>
            <p className='redaction__default'>Adres e-mail:</p>
            <div className='redaction__default redaction__default--mail'><a href='mailto:jacek.jaworski@maxfilm.com.pl'>jacek.jaworski@maxfilm.com.pl</a></div>
        </address>

        
        <div className='studio__imageRedaction'><FontAwesomeIcon icon={faPaperPlane}/></div>
      </article>
      
      <p className='bip__owner'>
        Właścicielem Instytucji Filmowej MAX-FILM S.A. jest Samorząd Województwa
        Mazowieckiego. Działalność IF MAX-FILM związana jest z dystrybucją
        filmów, zarządzaniem kinami oraz promowaniem kultury i propagowaniem
        kinematografii polskiej i zagranicznej.
      </p>
      <article className='bip__mission task'>
        <h4 className='task__title'>Misja</h4>
        <p className='task__description'>
        IF MAX-FILM odkrywa przed widzem świat sztuki filmowej. Inspiruje i
        edukuje poprzez propagowanie ambitnego kina polskiego i światowego oraz
        współpracę z wybitnymi twórcami. Działania prowadzone przez IF MAX-FILM
        są pomostem łączącym widza z jednym z najbardziej fascynujących obszarów
        kultury.
      </p>
      </article>
      <article className='bip__targets concept'>
        <h4 className='concept__title'>Cele</h4>
        <ul className='concept__list'>
          {targets}
        </ul>
        </article>
        <a className='bip__link' href={linkVariable} target='blank' rel="noopener noreferrer">Status spółki PDF</a>
    </section>


  );
};

export default Bip;