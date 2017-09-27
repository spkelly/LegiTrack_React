import React, { Component } from 'react';
import Search from './search';

class SearchPanel extends Component{
  render(){
    return (
      <div className="search-panel">
        <Search />
        <div className="advanced-search-opt">
          <h5>Select Year</h5>
          <hr />
          <ul>
            <li><input type="radio" name="year" value="2017" /> <p>2017</p></li>
            <li><input type="radio" name="year" value="2016" /> <p>2016</p></li>
            <li><input type="radio" name="year" value="2015" /> <p>2015</p></li>
            <li><input type="radio" name="year" value="All" /> <p>All</p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchPanel
