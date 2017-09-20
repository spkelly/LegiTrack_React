import React, { Component } from 'react';
import Navigation from './navbar';
import Footer from './footer';
import ResultList from  '../containers/ResultList';
import _ from 'lodash';


class Results extends Component{

  constructor(props){
    super(props);
  }
  render(){
    console.log(this.state)
    return (
      <div className="search-results">
        <Navigation />
        <div className="results-main">
          <ResultList></ResultList>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Results
