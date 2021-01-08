import React from "react";
import "./marketing.scss";
import advertising from '../../images/advertising.jpg'
import ticket from '../../images/ticket.png'
import poster from '../../images/poster.jpg'
import billboard from '../../images/billboard.png'
import internet from '../../images/internet.jpg'
import rent from '../../images/rent.jpg'

const Marketing = () => {
  return (
    <section className='marketing'>
      <div className='marketing__picture marketing__picture--advertising'>
        <img className='marketing__picture__image' src={advertising} alt='advertising'></img>
      </div>
      <div className='marketing__item'>
        <p className='marketing__item__description'>Wyświetlanie filmów reklamowych przed seansami</p>
      </div>
      <div className='marketing__item'>
      <p className='marketing__item__description'>Zamieszczanie reklamy na biletach kinowych</p>
      </div>
      <div className='marketing__picture marketing__picture--advertising'>
        <img className='marketing__picture__image' src={ticket} alt='aticket'></img>
      </div>
      <div className='marketing__picture marketing__picture--advertising'>
        <img className='marketing__picture__image' src={poster} alt='poster'></img>
      </div>
      <div className='marketing__item'>
        <p className='marketing__item__description'>Umieszczanie plakatów, plansz, floor-sticker`ów oraz innych materiałów reklamowych na terenie obiektów kinowych</p>
      </div>
      <div className='marketing__item'>
      <p className='marketing__item__description'>Reklama wielkopowierzchniowa (bilbordy, banery) - wynajem powierzchni</p>
      </div>
      <div className='marketing__picture marketing__picture--advertising'>
        <img className='marketing__picture__image' src={billboard} alt='billboard'></img>
      </div>
      <div className='marketing__picture marketing__picture--advertising'>
        <img className='marketing__picture__image' src={internet} alt='internet'></img>
      </div>
      <div className='marketing__item'>
        <p className='marketing__item__description'>Reklama na stronach internetowych kin</p>
      </div>
      <div className='marketing__item'>
      <p className='marketing__item__description'>Wynajem sal na imprezy okolicznościowe (eventy)</p>
      </div>
      <div className='marketing__picture marketing__picture--advertising'>
        <img className='marketing__picture__image' src={rent} alt='rent'></img>
      </div>
    </section>
  );
};

export default Marketing;
