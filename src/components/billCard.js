import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
const testDeec="Concerning the impact of federal tax reform on the state and an encouragement to the state's congressional ...";

class BillCard extends Component{

  render(){
    return (
      <div className="bill-card">
        <a>
          <h5 className="bc-title">HB17_{this.props.cardNum}</h5>
          <hr></hr>
          <div className="container">
            <p className="bc-status">Status: </p>
            <ProgressBar progress={this.props.progress} />
            <p>Description: </p>
            <p>{testDeec}</p>
          </div>
        </a>

      </div>
    )
  }
}

export default BillCard
