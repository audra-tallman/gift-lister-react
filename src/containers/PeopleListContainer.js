import React, { Component } from "react";
import { connect } from 'react-redux';
import { getPeople } from '../actions/people';
import PersonForm from './PersonForm';
import PeopleList from '../components/PeopleList';
import PersonGifts from './PersonGifts'

class PeopleListContainer extends Component {
  constructor() {
    super();
    this.state = { people: [] };
  }

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    return(
      <div>
      <h1> People on your list: </h1>
      <PeopleList people={this.props.people}/>
          <hr/>
          <h2> Add a Person to your list...</h2>
          <PersonForm />
          <hr/>
          <h3> Selected Person's Gifts: </h3>
          <PersonGifts />
      </div>
    )}
  }

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return{
    people: state.peopleReducer.people
  }
}

export default connect (mapStateToProps, { getPeople }) (PeopleListContainer);
