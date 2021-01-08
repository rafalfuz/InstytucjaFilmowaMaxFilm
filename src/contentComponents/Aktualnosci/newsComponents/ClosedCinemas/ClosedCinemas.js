import React from 'react';
import './closedCinemas.scss'

const ClosedCinemas = () => {
    return ( <article className='closed'>
        <p className='closed__text'>Szanowni Państwo, Drodzy Widzowie!
    Zgodnie z decyzją Rządu, ogłoszoną podczas konferencji prasowej premiera Mateusza Morawieckiego 4 listopada, od 7 do 29 listopada 2020 r. instytucje kultury, w tym kina, będą zamknięte. Także placówki zarządzane przez Instytucję Filmową Max-Film we wszystkich miastach pozostaną nieczynne dla widzów.</p>

        <p className='closed__text'>Do 6 listopada włącznie mogą Państwo korzystać z naszych kin, przy zachowaniu obowiązujących ograniczeń, czyli:  </p>
        <ul className='closed__list'>
            <li className='closed__item'>z udziałem max. 25 proc. publiczności,</li>
            <li className='closed__item'>przy udostępnieniu co czwartego miejsca lub przy zachowaniu 1,5 m odległości,</li>
            <li className='closed__item'>przy obowiązkowym zakrywaniu ust i nosa.</li>
        </ul>
        <p className='closed__text'>W sprawie zwrotu zakupionych biletów, prosimy o kontakt z poszczególnymi kinami sieci NoveKino.</p>
        <p className='closed__text closed__text--hope'><strong>Liczymy, że okres zamknięcia kin nie zostanie przedłużony i niedługo znów spotkamy się na sali kinowej!</strong></p>
    </article> );
}
 
export default ClosedCinemas;