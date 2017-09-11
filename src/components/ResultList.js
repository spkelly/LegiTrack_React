import React, { Component } from 'react';
import _ from 'lodash';

import ResultListItem from './resultListItem';
import SearchPanel from './searchPanel';

class ResultList extends Component{
  constructor(props){
    super(props);

    this.renderResults = this.renderResults.bind(this);
  }

  renderResults(){
    let resultList = _.map(this.props.list, (bill) =>{
      if(bill.bill_number){
        return (
          <ResultListItem key={bill.bill_id} bill={bill} />
        )
      }
    });
    return resultList;
  }

  render(){
    console.log('this.props: ', this.props.list)
    return (
      <div className="search-main">
        <div className="row">
          <div className="col-md-2 search-col">
            <SearchPanel/>
          </div>
          <div className="col-md-10">
            <hr className="text-center results-title"></hr>
            <div className="list-group">
              {this.renderResults()}
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default ResultList
