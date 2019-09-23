import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPeople } from './actions/people';
import PersonForm from './containers/PersonForm';


class App extends Component {
  componentDidMount() {
    this.props.getPeople()
  }

  render() {
    const people = this.props.people.map((person, i) =>
    <ul key={i}> {person.name}</ul>)
    return (
      <div className="App">
      <h1> People on your list: </h1>
        {this.props.loading ? <h2>Loading... </h2>: people}
        <hr/>
        <PersonForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return{
    people: state.peopleReducer.people,
    loading: state.peopleReducer.loading
  }
}

export default connect(mapStateToProps, { getPeople }) (App);
