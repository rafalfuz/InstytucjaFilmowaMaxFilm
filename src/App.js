import React from "react";
import "./App.scss";
import Header from '../src/mainComponents/Header/Header';
import Navigation from "../src/mainComponents/Navigation/Navigation"
import Page from "../src/mainComponents/Page/Page"
import Footer from "../src/mainComponents/Footer/Footer"
import Advertisement from "../src/mainComponents/Advertisement/Advertisement"
import { BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <Navigation />
          <Page />
          <Advertisement/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;