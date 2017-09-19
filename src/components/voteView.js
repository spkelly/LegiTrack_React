import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import pattern from 'patternomaly'
class VoteView extends Component{
  constructor(props){
    super(props);

    this.state = {activeVote:props.votes[props.votes.length -1]}

    this.renderVoteList = this.renderVoteList.bind(this);
    this.renderActiveVoteChart = this.renderActiveVoteChart.bind(this);
  }

  handleClick(event,vote){
    event.preventDefault;
    console.log("vote button clicked", vote);
    this.setState({activeVote:vote})
  }

  renderVoteList(){
    return this.props.votes.map(vote =>{
      return ( <button  data-id={vote.roll_call_id} onClick={(e)=>this.handleClick(e,vote)}className="btn vote-btn"key={vote.roll_call_id}>{vote.date}</button>)
    })
  }

  renderActiveVoteChart(){
    let dataSet={
      datasets:[{
        data:[
          this.state.activeVote.yea,
          this.state.activeVote.nay,
          this.state.activeVote.nv,
          this.state.activeVote.passed],
        backgroundColor: [
              '#c3f7c3',
              '#ff7c75',
              '#ffce56',
              '#d6d8d6']
      }],
      labels:['Yay: ' +this.state.activeVote.yea,
        'Nay: '+this.state.activeVote.nay,
        'No Vote: '+this.state.activeVote.nv,
        'Pass: '+this.state.activeVote.passed]
    };

    return(
      <div className="active-vote-chart">

        <Pie data={dataSet} />
        <h6 className="chart-label text-center">{this.state.activeVote.desc}</h6>
      </div>
    )
  }
  render(){
    return (
      <div className="vote-view">
        {this.renderVoteList()}

        {this.renderActiveVoteChart()}
      </div>
    )
  }
}

export default VoteView
