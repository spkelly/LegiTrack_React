import React, { Component } from 'react';


class ProgressBar extends Component{
  render(){
    return (
      <div className="progress-bar">
          <div className="progress" style={{width: `${this.props.progress}%`}} />
      </div>
    )
  }
}

export default ProgressBar
