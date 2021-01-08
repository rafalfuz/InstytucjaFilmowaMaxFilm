import React from 'react';
import './nkPrzedwiosnie.scss'

const NkPrzedwiosnie = () => {

    const linkVariable='http://petronews.pl/podroz-w-czasie-po-historii-plockiego-kina-przedwiosnie-zdjecia/'


    return (
        <>
        <article className='przedwiosnie' style={{margin: '20px', textIndent: '22px'}}>
            Niewielu z Państwa pewnie wie, że Instytucja filmowa MAX-FILM ma w swoim portfolio także budowę nowych kin. Tak było w przypadku kina Przedwiośnie w Płocku, które przywróciliśmy do życia w 2009 roku. Jak Instytucja filmowa MAX-FILM zarządza swoimi kinami? Jak udało nam się połączyć tradycję z nowoczesnością i zagwarantować widzom kino na najwyższym poziomie? Zapraszamy do lektury!
        </article>
        <a className='przedwiosnie--link' href={linkVariable} target='blank' rel="noopener noreferrer">Czytaj więcej</a>
        </>
     );
}
 
export default NkPrzedwiosnie;