import React, { Component } from 'react';


class SponsorCard extends Component{
  render(){
    return (
      <div  className="sponsor-card" key={this.props.sponsor.people_id}>
        <div className="row">
          <div className="col-md-4">
              <span><img  src={"https://votesmart.org/canphoto/"+this.props.sponsor.votesmart_id+"_lg.jpg"}/></span>
          </div>
          <div className="col-md-8 sponsor-info">
            <p className="sponsor-name">{this.props.sponsor.first_name +' '+
            this.props.sponsor.last_name}</p>
          </div>
        </div>

      </div>
    )
  }
}

export default SponsorCard
