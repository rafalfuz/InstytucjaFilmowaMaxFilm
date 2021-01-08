import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

const navTitles = [
  { title: "Strona Główna", path: "/", exact: true },
  { title: "Aktualności", path: "/aktualnosci" },
  { title: "Nasze kina", path: "/naszekina" },
  { title: "Kontakt", path: "/kontakt" },
  { title: "Organy spółki", path: "/organyspolki" },
  { title: "Statut spółki", path: "/statutspolki" },
  { title: "BIP", path: "/bip" },
  { title: "Marketing", path: "/marketing" },
  { title: "Dystrybucja", path: "/dystrybucja" },
  { title: "Przetargi", path: "/przetargi" },
  { title: "Komunikacja z akcjonariuszami", path: "/komunikacja" },
  { title: "Informacja o wykorzystaniu cookies", path: "/cookies" },
];

class Navigation extends React.Component{
  state = {
    active: false
  }

  handleToggle = () =>{
    this.setState({
      active: !this.state.active
    })
  }

  closeMenu = () => {
    this.setState({
      active: false
  })
}

  render(){
  const nav = navTitles.map((item) => (
    <li className='navigation__item' key={item.title}>
      <NavLink className='navigation__item__a' onClick={this.closeMenu} to={item.path} exact={item.exact ? item.exact : false}>
        {item.title}
      </NavLink>
    </li>
  ));
 
  return(
    <>
    <nav className='navigation'>
      {this.state.active ? <div className='navigation__toggle'><FontAwesomeIcon icon={faCaretUp} onClick={this.handleToggle}/></div> : <div className='navigation__toggle'><FontAwesomeIcon icon={faCaretDown} onClick={this.handleToggle}/></div>}
      {this.state.active ? <ul className='navigation__list navigation__list--active'>{nav}</ul> : <ul className='navigation__list navigation__list--disactive'>{nav}</ul>}
    </nav>
    </>
 )

}
}

export default Navigation;
