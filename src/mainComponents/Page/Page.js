import React from "react";
import { Route } from "react-router-dom";
import './page.scss'
import StronaGlownaContent from "../../contentComponents/StronaGlowna/StronaGlowna"
import Aktualnosci from "../../contentComponents/Aktualnosci/Aktualnosci"
import KontaktContent from "../../contentComponents/Kontakt/Kontakt"
import OrganySpolkiContent from "../../contentComponents/OrganySpolki/OrganySpolki";
import StatutSpolkiContent from "../../contentComponents/StatutSpolki/StatutSpolki";
import BipContent from "../../contentComponents/Bip/Bip";
import MarketingContent from "../../contentComponents/Marketing/Marketing";
import DystrybucjaContent from "../../contentComponents/Dystrybucja/Dystrybucja";
import NaszeKinaContent from "../../contentComponents/NaszeKina/NaszeKina";
import KomunikacjaContent from "../../contentComponents/KomunikacjaZAkcjonariuszami/KomunikacjaZAkcjonariuszami";
import PrzetargiContent from "../../contentComponents/Przetargi/Przetargi";
import CookiesContent from "../../contentComponents/InformacjaOWykorzystaniuCookies/InformacjaOWykorzystaniuCookies";

const Page = () => {
  return (
    <section className='page'>
      <Route path="/" exact component={StronaGlownaContent}></Route>
      <Route path="/aktualnosci" exact component={Aktualnosci}></Route>
      <Route path="/kontakt" exact component={KontaktContent}></Route>
      <Route path="/organyspolki" exact component={OrganySpolkiContent}></Route>
      <Route path="/statutspolki" exact component={StatutSpolkiContent}></Route>
      <Route path="/bip" exact component={BipContent}></Route>
      <Route path="/marketing" exact component={MarketingContent}></Route>
      <Route path="/dystrybucja" exact component={DystrybucjaContent}></Route>
      <Route path="/naszekina" exact component={NaszeKinaContent}></Route>
      <Route path="/przetargi" exact component={PrzetargiContent}></Route>
      <Route path="/komunikacja" exact component={KomunikacjaContent}></Route>
      <Route path="/cookies" exact component={CookiesContent}></Route>
    </section>
  );
};

export default Page;
