import React, { Component } from 'react';


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
    this.validateInput();
    if(this.state.isValid){
        console.log('Valid');
    }
  }

  validateInput(){
    if(this.state.inputValue.length === 0){
      this.setState({isValid: false});
    }
    else{
      this.setState({isValid:true})
    }
  }

  render(){
    return (
      <div className="search-component">
        <form onSubmit={this.handleSubmit.bind(this)} actions="GET" path="./results">
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <input type="text" value={this.state.inputValue}onChange={this.changeValue.bind(this)}className="form-control search-bar" />
            </div>
            <div className="col-lg-5 col-sm-12">
              <button type="submit" className="btn btn-primary form-control submit search-button" > Search </button>
            </div>
          </div>
        </form>
        <div className="col-lg-5 col-sm-12">
        {this.renderError()}
        </div>
        </div>



    )
  }
}

export default Search
