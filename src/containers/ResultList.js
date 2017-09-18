import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import BillView from './billView';
import ResultListItem from '../components/resultListItem';
import SearchPanel from '../components/searchPanel';
import {selectBill, searchBill} from '../actions/index';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router';

class ResultList extends Component{
  constructor(props){
    super(props);

    this.renderResults = this.renderResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(bill){
    this.props.selectBill(bill.bill_id);
    this.props.history.push(`/bill/${bill.bill_id}`)
  }

  renderResults(){
    if(!this.props.list){
      return(
        <div id="no-results">Please Search for a Bill</div>
      )
    }
    let resultList = _.map(_.toArray(this.props.list), (bill) =>{
      if(bill.bill_number){
        return (
          <div  key={bill.bill_id} onClick={()=>this.handleClick(bill)}>
            <ResultListItem  bill={bill} />
          </div>

        )
      }
    });
    return resultList;
  }
  render(){
    return (
      <div className="search-main">
        <div className="row">
          <div className="col-md-3 search-col">
            <SearchPanel/>
          </div>
          <div className="col-md-9">
            <hr className="text-center results-title"></hr>
            <div className="list-group result-container">
              {this.renderResults()}
            </div>
          </div>

        </div>

      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    list: state.bills
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBill: selectBill, searchBill: searchBill}, dispatch)
}
export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultList));
