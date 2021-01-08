import React from "react";
import "./dystrybucja.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'


const Dystrybucja = () => {

  const distribution = [
    {id:1, name: 'Renata Michalska', phone:'tel. (22) 670-21-00 wew. 122', email:'renatamichalska@maxfilm.com.pl'},
    {id:2, name: 'Jacek Jaworski', phone:'tel. (22) 670-21-00 wew. 123', email:'jacekjaworski@maxfilm.com.pl'}
  ]

  const distributors = distribution.map((distributor) => 
  
      <div className='distribution__person' key={distributor.id}>
      <div className='distribution__name'>{distributor.name}</div>
      <div className='distribution__contact'><FontAwesomeIcon icon={faPhone}/>
          <a className='distribution__contact__phone' href='tel:0226702100'>{distributor.phone}</a>
      </div>
      <div className='distribution__contact'><FontAwesomeIcon icon={faAt}/>
          <a className='distribution__contact__email' href={`mailto:${distributor.email}`}>{distributor.email}</a>
      </div>
      </div>
  )
    
  
    return (
    <section className='distribution'>
      {distributors}
    </section>
  );
};

export default Dystrybucja;
