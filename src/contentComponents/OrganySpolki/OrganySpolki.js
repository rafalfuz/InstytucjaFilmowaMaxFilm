import React from "react";
import './organySpolki.scss'
import imgDirectorMale from '../../images/maleBoss.jpg'
import imgDirectorFemale from '../../images/femaleBoss.jpg'
import imgBoss from '../../images/boss.jpg'


const OrganySpolki = () => {
  const president = {name: 'Paweł K. Doktór', appointment: 'Prezes zarządu, Dyrektor Finansowy', photo: ''}
  const boardOfDirectors = [
    {name: 'Lidia Rudzka', appointment: 'Przewodnicząca Rady Nadzorczej', photo: imgDirectorFemale},
    {name: 'Tadeusz Nalewajk', appointment: 'Wiceprzewodniczący Rady Nadzorczej', photo: imgDirectorMale},
    {name: 'Michał Rączkowski', appointment: 'Sekretarz Rady Nadzorczej', photo: imgDirectorMale},
    {name: 'Tomasz Karbowiński', appointment: 'Członek Rady Nadzorczej', photo: imgDirectorMale}
  ];

  const directors = boardOfDirectors.map((director)=>

  <div className='directors__icon' key={director.name}>
  <div className='directors__icon__photo'>
    <img src={director.photo} alt='DirectorPhoto'></img>
  </div>
  <h1 className='directors__icon__name'>{director.name}</h1>
  <p className='directors__appointment'>{director.appointment}</p>
  </div>

  )

  return (
    <section className="management">
      <p className='management__paragraph'>Organami Spółki - stosownie do postanowień ustawy z dnia 15 września 2000 r. Kodeks spółek handlowych (Dz.U. Nr 94, poz. 1037 z późn. zm.) – są: Zarząd Spółki, Rada Nadzorcza i Walne Zgromadzenie Akcjonariuszy.</p>
      <p className='management__paragraph'>Zarząd - prowadzi sprawy Spółki i reprezentuje Spółkę wobec podmiotów zewnętrznych.</p>
      <p className='management__paragraph management__paragraph--bold '>W skład Zarządu wchodzi:</p>
     <article className='president'>
      <div className='president__photo'>
        <img className='president__photo__img' src={imgBoss} alt='Boss'></img>
      </div>
      <div className='president__info'>
        <h1 className='president__info__name'>{president.name}</h1>
        <p className='president__info__appointment'>{president.appointment}</p>
        <p className='president__info__description'>Paweł Doktór, od 2010 r. prezes MAX-FILM, doświadczony menadżer z wieloletnią praktyką w branży usług finansowych. W przeszłości dyrektor finansowy koncernu Axel Springer Polska oraz członek zarządu wydawnictwa Marquard Media Polska. Wieloletni pracownik największych firm audytorskich. Posiada umiejętności w zakresie planowania biznesowego, zarządzania ryzykiem, finansów przedsiębiorstwa, finansów zarządczych i rachunkowości. Absolwent Politechniki Warszawskiej i Wydziału Zarządzania Uniwersytetu Warszawskiego. Obejmując stanowisko prezesa zarządu dekadę temu przyjął nową strategię funkcjonowania spółki skupiającą się na nowoczesnym zarządzaniu kinami, rozwijaniu sieci NoveKino oraz promocji kinematografii polskiej i światowej.</p>
      </div>
     </article >
     <p className='management__paragraph management__paragraph--bold'>
       Rada Nadzorcza - sprawuje nadzór nad działalnością spółki we wszystkich dziedzinach jej działalności.
       </p>
    <article className='directors'>
      {directors}
    </article>
     <p className='management__paragraph'>Walne Zgromadzenie Akcjonariuszy stanowi Województwo Mazowieckie, które posiada 100% akcji Spółki.
      Kompetencje organów Spółki Instytucja Filmowa "MAX-FILM" S.A. zostały określone w Statucie Spółki Instytucja Filmowa "MAX-FILM" S.A. w Warszawie.</p>
    </section>
  );
};

export default OrganySpolki;
