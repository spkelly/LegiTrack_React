import React, {Component} from 'react';
import {connect} from 'react-redux';

class BillView extends Component {

  renderBill(bill){
    if(bill){

      return(
        <div>
          <p>Title: {bill.title}</p>
          <p>Bill Number: {bill.bill_number}</p>
          <p>Relevence: {bill.relevance}</p>
          <p>Last Action: {bill.last_action}</p>
          <p>Last Action Date: {bill.last_action_date}</p>
          <p>Research URL: {bill.research_url}</p>
          <p>Text URL: {bill.text_url}</p>
          <p>State: {bill.state}</p>
          <p>Status: {bill.status}</p>
          <p>progress: {bill.committee}</p>
        </div>
      )
    }
  }
  render(){
    console.log(this.props);
    return(
      <div id="bill view">
        <p>I am just a bill</p>
        {this.renderBill(this.props.activeBill)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBill:state.activeBill
  }
}
export default connect(mapStateToProps)(BillView);
