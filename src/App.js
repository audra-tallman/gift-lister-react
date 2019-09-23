import React, { Component } from 'react';
import './App.css';
import PeopleListContainer from './containers/PeopleListContainer'



class App extends Component {

  render() {
    return (
      <div className="App">
        <PeopleListContainer />
      </div>
  )}
}


export default (App);
