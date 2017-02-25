import React, { Component } from 'react';
import logo from './logo.svg';

class AppHeader extends Component {
  
  //this is an example for state
  constructor(){
  	super();
  	this.state = {
  		text : "This is the intial state of the component"
  	}

    this.update = this.update.bind(this)
  }


  //Lets update on the component on some event
  update(e){
    console.log(e)
  	this.setState({text: e.target.value})
  }


  render() {
  	console.log(this.props);
    //console.log('state'+ this.state.text)
    return (
        <div className="App-header">
          <input type="text" onChange={ this.update }/>	
          <img src={logo} className="App-logo" alt="logo" />
          <h5>{this.props.text}</h5> 
          <h5>{this.state.text}</h5> 
        </div>
    );
  }
}

export default AppHeader;
