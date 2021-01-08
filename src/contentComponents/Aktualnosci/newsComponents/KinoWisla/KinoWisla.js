import React from 'react';
import './kinoWisla.scss'

const KinoWisla = () => {

    const linkVariable = 'http://www.maxfilm.com.pl/userfiles/20-10-26-Kino-Wisla-lokalny-klimat-swiatowe-kino.pdf'

    return ( 
        <>
        <article className='wisla' style={{margin: '20px', textIndent: '22px'}}>
            W warszawskim Kinie Wisła przy żoliborskim Placu Wilsona od ponad 60 lat praktycznie nieprzerwanie wyświetlane są filmowe premiery, organizowane spotkania z artystami, pokazy specjalne, warsztaty dla dzieci i młodzieży. Jak w erze multipleksów utrzymać zainteresowanie widzów stolicy kinem z duszą? Czym rywalizować z sieciami, gdy w Warszawie mamy najwięcej dużych ekranów w stosunku do liczby mieszkańców 
        </article>
        <a className='wisla--link' href={linkVariable} target='blank' rel="noopener noreferrer">Czytaj więcej</a>
        </>
        
        
     );
}
 
export default KinoWisla;