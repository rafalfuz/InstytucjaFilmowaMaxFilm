import React from 'react';
import './advertisement.scss'
import advChristmasSmall from '../../images/advChristmasSmall.jpg'
import advChristmasRegular from '../../images/advChristmasRegular.jpg'


const Advertisement = () => {
    return ( 
        <section className='advertisement'>
            <div className='advertisement__imagebox'>
                <img srcSet={`${advChristmasSmall} 300w, ${advChristmasRegular} 600w`} sizes='(max-width: 600px) 300px, (min-width: 601px) 800px' alt='Reklama'></img>
            </div>
        </section>
     );
}
 
export default Advertisement;