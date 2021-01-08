import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import imgMercury360 from "../../images/CinemasPhotos/Mercury.png"
import imgPrzedwiosnie360 from '../../images/CinemasPhotos/Przedwiosnie-night.jpg';
import imgWisla360 from '../../images/CinemasPhotos/wisla.png'
import imgSiedlce360 from '../../images/CinemasPhotos/Siedlce.jpg'
import imgSybilla360 from '../../images/CinemasPhotos/Sybilla-day.jpg';

import MercuryDescription from './descriptionsOfCinemas/MercuryDescription'
import PrzedwiosnieDescription from './descriptionsOfCinemas/PrzedwiosnieDescription'
import SiedlceDescription from './descriptionsOfCinemas/SiedlceDescription'
import SybillaDescription from './descriptionsOfCinemas/SybillaDescription'
import WislaDescription from './descriptionsOfCinemas/WislaDescription'

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './cinemabox.scss';

const NaszeKina = () =>{

    const cinemas = [
        {id:1, name: 'Kino Wisła', class:'wisla', city: 'Warszawa', description: <WislaDescription/>, link: 'https://novekino.pl/kina/wisla/', pictureS: imgWisla360},
        {id:2, name: 'Kino Mercury', class:'mercury', city: 'Biała Podlaska', description: <MercuryDescription/>, link: 'https://novekino.pl/kina/merkury/', pictureS: imgMercury360},
        {id:3, name: 'Sybilla', class:'sybilla', city: 'Puławy', description: <SybillaDescription/>, link: 'https://novekino.pl/kina/sybilla/', pictureS: imgSybilla360},
        {id:4, name: 'NoveKino Przedwiośnie', class:'przedwiosnie', city: 'Płock', description: <PrzedwiosnieDescription/>, link: 'https://novekino.pl/kina/przedwiosnie/', pictureS: imgPrzedwiosnie360},
        {id:5, name: 'NoveKino Siedlce', class:'siedlce', city: 'Siedlce', description: <SiedlceDescription/>, link: 'https://novekino.pl/kina/siedlce/', pictureS: imgSiedlce360},
    ]

    const cinemaBox = cinemas.map((item)=> 
    <article className={`cinemaElement cinemaElement--${item.class}`} key={item.id}>
        <h3 className='cinemaElement__name'>{item.name}</h3> 
        <Splide>
            <SplideSlide>
            <div className='cinemaElement__banner cinemaElement__banner--photo'>
{/*IMPORT AND USE SRCSET/SIZES PROPERTIES TO ADD SUITABLE PHOTOS */}    <img className='cinemaElement__image' srcSet="" sizes="" src={item.pictureS} alt={item.name}/>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className='cinemaElement__banner cinemaElement__banner--description'>
            {item.description}
            </div>
            </SplideSlide>
        </Splide>
        <h3 className='cinemaElement__city'>{item.city}</h3>
        <a className='cinemaElement__link' href={item.link} target='blank'>Strona Kina</a>       
    </article>
    )
   
    return (
        <section className='cinemasCatalogue'>
        {cinemaBox}
        </section>
     );
}

export default NaszeKina;