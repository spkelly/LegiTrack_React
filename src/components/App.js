import React, { Component } from 'react';
import '../App.css';
import Navigation from './navbar'
import Jumbotron from './jumbotron'
import Promo from './promo'
import Footer from './footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}

export default App;
