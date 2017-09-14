import React, { Component } from 'react';
import { withRouter } from 'react-router';


class Search extends Component{

  constructor(props){
    super(props);

    this.state = {
      inputValue : '',
      isValid: true,
    }

    this.validateInput = this.validateInput.bind(this);
  }

  renderError(){
    if(!this.state.isValid){
      return (
        <div className="input-error"
             style={{
               backgroundColor: '#ff8284',
               height: '40px',
               color: '#b81b11',
               border: 'solid #b81b11 1px',
               paddingLeft: '5px',
               borderRadius: '6px',
               marginTop: '20px',
               paddingTop: '8px'
             }}
        >
        <p>Please Enter a search term</p>
        </div>
      )
    }
  }
  changeValue(e){
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();

    if( this.validateInput()){
        console.log('Valid', this);
        this.props.history.push('/results');
    }
  }

  validateInput(){
    console.log("hello", this.state.inputValue.length);
    if(this.state.inputValue.length === 0){
      this.setState({isValid:false});
      return false
    }
    else{
      this.setState({isValid:true});
      return true
    }
  }

  render(){
    return (
      <div className="search-component">
        <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" value={this.state.inputValue}onChange={this.changeValue.bind(this)}className="form-control search-bar" />
              <button type="submit" className="btn btn-primary form-control submit search-button" > Search </button>
        </form>
          {this.renderError()}
      </div>
    )
  }
}

export default withRouter(Search);
