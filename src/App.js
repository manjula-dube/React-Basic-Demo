import React, { Component } from 'react';
import './App.css';
import  AppHeader from './AppHeader';
import  AppIntro from './AppIntro';
import VideoPlayer from './VideoPlayer'


class App extends Component {
  render() {
    return (
      <div className="App">
       <AppHeader text="Welcome to React"/>
       <AppIntro/>
      </div>
    );
  }
}

export default App;
