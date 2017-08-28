import React, { Component } from 'react';


class Search extends Component{
  render(){
    return (
      <div className="search-component">
      <div className="row">
        <div className="col-lg-5 col-sm-12">
        <form>
          <input type="text" className="form-control search-bar" />
          <button type="submit" className="btn btn-primary form-control submit search-button" > Search </button>
        </form>
        </div>
        </div>
      </div>

    )
  }
}

export default Search
