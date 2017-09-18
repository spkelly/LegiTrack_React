import React, { Component } from 'react';


class SponsorCard extends Component{
  render(){
    return (
      <div  className="sponsor-card" key={this.props.sponsor.people_id}>
        <span><img  src={"https://votesmart.org/canphoto/"+this.props.sponsor.votesmart_id+"_lg.jpg"}/></span>
        <p className="sponsor-name">{this.props.sponsor.first_name +' '+
        this.props.sponsor.last_name}</p></div>
    )
  }
}

export default SponsorCard
