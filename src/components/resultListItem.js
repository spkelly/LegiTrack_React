import React, { Component } from 'react';


class ResultListItem extends Component{
  render(){
    return (
      <a key={this.props.bill.bill_id}  className="list-group-item list-group-item-action bill-list-item">
        <div className="row">
          <div className="col-md-2 list-item-number">{this.props.bill.bill_number}</div>
          <div className="col-md-10 list-item-title">{this.props.bill.title}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-8">Last Action: {this.props.bill.last_action}</div>
          <div className="col-md-4">Last Action Date: {this.props.bill.last_action_date}</div>
        </div>
      </a>
    )
  }
}

export default ResultListItem
