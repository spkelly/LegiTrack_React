import React, { Component } from 'react';
import Navigation from './navbar';
import Footer from './footer';
import ResultList from  '../containers/ResultList';
import testData from '../otherstuff/testData';
import _ from 'lodash';


class Results extends Component{

  constructor(props){
    super(props);
    this.state = {testData: _.toArray(testData.results.searchresult) }
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
