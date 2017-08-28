import React, { Component } from 'react';


class Promo extends Component{
  render(){
    return (
      <div className="promo">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 text-center">
              <h3 class="flavor-title center">Discover</h3>
              <hr />
              <h5 class="center">Search any active Colorado legislation!</h5>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h3 class="flavor-title center">Track</h3>
              <hr />
              <h5 class="center">View upcoming Events, votes, hearings and more!</h5>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h3 class="flavor-title center">Research</h3>
              <hr />
              <h5 class="center">Discover bill sponsors, currents statuses and complete bill texts</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Promo
