import React from "react";
import './komunikacja.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const KomunikacjaZAkcjonariuszami = () => {

  const data = [
    {id:1, title:'Pierwsze wezwanie Akcjonariusza Instytucji Filmowej "MAX-FILM" S.A. do złożenia dokumentów akcji w Spółce', link: 'http://www.maxfilm.com.pl/userfiles/1_wezwanie_Akcjonariusza.pdf'},
    {id:2, title: 'Drugie wezwanie Akcjonariusza Instytucji Filmowej "MAX-FILM" S.A. do złożenia dokumentów akcji w Spółce', link: 'http://www.maxfilm.com.pl/userfiles/2_wezwanie_Akcjonariusza.pdf'},
    {id:3, title: 'Trzecie wezwanie Akcjonariusza Instytucji Filmowej "MAX-FILM" S.A. do złożenia dokumentów akcji w Spółce', link: 'http://www.maxfilm.com.pl/userfiles/3_wezwanie_Akcjonariusza.pdf'},
    {id:4, title: 'Czwarte wezwanie Akcjonariusza Instytucji Filmowej "MAX-FILM" S.A. do złożenia dokumentów akcji w Spółce', link: 'http://www.maxfilm.com.pl/userfiles/4_wezwanie_Akcjonariusza.pdf'},
    {id:5, title: 'Piąte wezwanie Akcjonariusza Instytucji Filmowej "MAX-FILM" S.A. do złożenia dokumentów akcji w Spółce', link: 'http://www.maxfilm.com.pl/userfiles/5_wezwanie_Akcjonariusza.pdf'},
  ]

  const shareholders = data.map((shareholder)=>
    <div className='shareholder__key' key={shareholder.id}>
    <div className='shareholders__title'>{shareholder.title}</div>
    <div className='shareholders__icon'><FontAwesomeIcon icon={faFilePdf}/>
    <a className='shareholders__icon__link' href={shareholder.link} target='blank' rel="noopener noreferrer">Plik PDF</a>
    </div>  
    </div>
    )

  return(
    <section className='shareholders'>
    {shareholders}
    </section>
  )
};

export default KomunikacjaZAkcjonariuszami;
