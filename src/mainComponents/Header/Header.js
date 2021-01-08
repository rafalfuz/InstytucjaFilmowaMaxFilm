import React from "react";
import "./header.scss";
import logo from "../../images/logo.jpg";

const Header = (props) => {
  return ( 
    <section className="header">

        <img className='header__image' src={logo} alt="logo"></img>

        <h1 className="header__title"> INSTYTUCJA FILMOWA MAX - FILM S.A.</h1>
    </section>
  );
};

export default Header;