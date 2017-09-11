import React, { Component } from 'react';
import BillCard from '../components/billCard';

const bill ={
  billName: "test",
  billStatus: "test",
  billDescription: "test test test test test"
}
class Promo extends Component{


  render(){
    return (
      <div className="promo">
        <div className="container">
        <h4>Recently Viewed</h4>
          <div className="row">
            <div className="col-md-3 col-sm-12 ">
              <BillCard bill={bill} progress="25" cardNum="158329"></BillCard>
            </div>
            <div className="col-md-3 col-sm-12">
              <BillCard bill={bill} progress="50" cardNum="35823"></BillCard>
            </div>
            <div className="col-md-3 col-sm-12 ">
              <BillCard bill={bill} progress="75" cardNum="8421"></BillCard>
            </div>
            <div className="col-md-3 col-sm-12 ">
              <BillCard bill={bill} progress="100" cardNum="2284"></BillCard>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Promo
