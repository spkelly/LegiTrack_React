import React, { Component } from 'react';


class SponsorCard extends Component{
  render(){
    console.log(this.props.sponsor)
    return (
      <div  className={this.props.sponsor.party == "R"? " sponsor-card rep": "sponsor-card dem"} key={this.props.sponsor.people_id}>
        <div className="row">
          <div className=" sponsor-pic">
              <span><img  src={"https://votesmart.org/canphoto/"+this.props.sponsor.votesmart_id+"_lg.jpg"}/></span>
          </div>
          <div className="col-md-12 sponsor-info text-center">
            <p className="sponsor-name ">{this.props.sponsor.first_name +' '+
            this.props.sponsor.last_name}</p>
          </div>
        </div>

      </div>
    )
  }
}

export default SponsorCard
