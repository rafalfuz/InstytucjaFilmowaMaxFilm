import React from 'react';
import './aktualnosci.scss'
import ClosedCinemas from './newsComponents/ClosedCinemas/ClosedCinemas'
import FMFkKomendy from './newsComponents/FMFkKomendy/FMFkKomendy'
import KinoWisla from './newsComponents/KinoWisla/KinoWisla'
import NkPrzedwiosnie from './newsComponents/NkPrzedwiosnie/NkPrzedwiosnie'
import KinoAtlantic from './newsComponents/KinoAtlantic/KinoAtlantic'

class Aktualnosci extends React.Component{

    state = {
        infos: [
            {id:1, date: '5.11.2020', title: 'Nasze kina zamknięte od 7 do 29 listopada...', isExpanded: false, text: <ClosedCinemas/>},
            {id:2, date: '2.11.2020', title: 'Festiwal Muzyki Filmowej Krzysztofa Komedy w Warszawie przeniesiony na 2021 r....', isExpanded: false, text: <FMFkKomendy/>},
            {id:3, date: '26.10.2020', title: 'Kino Wisła – lokalny klimat, światowe kino....', isExpanded: false, text: <KinoWisla/>},
            {id:4, date: '26.10.2020', title: 'Poznaj historię NoveKino Przedwiośnie....', isExpanded: false, text: <NkPrzedwiosnie/>},
            {id:5, date: '30.09.2020', title: 'List do Sympatyków kina Atlantic....', isExpanded: false, text: <KinoAtlantic/>},
        ]
    }

    handleExpand = (id) => {
        let info = [...this.state.infos]
        info.forEach((item)=>{
            if(item.id === id){
            item.isExpanded = !item.isExpanded
        }
        this.setState({
            info
        })
    })
    }
    render(){
    
    const news = this.state.infos.map((item) => (
    <article className='news__article info' key={item.id}>
    <p className='info__date'>{item.date}</p>
    <h1 className='info__title'>{item.title}</h1>
    {item.isExpanded ? item.text : null} 
    <span className='info__expand' onClick={this.handleExpand.bind(this, item.id)}>{item.isExpanded ? 'Zwiń ^' : 'Zobacz więcej'}</span>      
    </article>
    ))
    
    
    return ( 
    <section className='news'>
        {news}
    </section> );
        
}
}
export default Aktualnosci;