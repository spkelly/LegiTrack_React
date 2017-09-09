import React, { Component } from 'react';
import Navigation from './navbar';
import Footer from './footer';

class Results extends Component{
  render(){
    return (
      <div className="search-results">
        <Navigation />
        <Footer/>
      </div>
    )
  }
}

export default Results
