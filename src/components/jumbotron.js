import React, { Component } from 'react';
import Search from './search';


class Jumbotron extends Component{
  render(){
    return (
      <div className="jumbo">
        <div className="jumbotron">
          <div className="jb-overlay">
            <div className="container">
              <h1  className="jb-title display-4">Legitrack</h1>
              <p className=" jb-sub lead">The thrill of state legislature is at your fingertips</p>
              <div className="search-container">
                <Search></Search>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron
