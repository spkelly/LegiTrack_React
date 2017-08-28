import React, { Component } from 'react';
import '../App.css';
import Navigation from './navbar'
import Jumbotron from './jumbotron'
import Promo from './promo'
import Footer from './footer'
import Search from './search'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron />
        <Promo />
        <Footer />
      </div>
    );
  }
}

export default App;
