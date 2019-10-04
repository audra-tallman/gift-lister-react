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
          {this.props.personIsSelected && <>
            <PersonGifts />
            </>}
      </div>
    )}
  }

const mapStateToProps = (state) => {
  console.log("I am PeopleList state", state)
  return{
    people: state.peopleReducer.people,
    personIsSelected: !!state.selectedPersonReducer,
    gifts: state.giftReducer.gifts
  }
}

export default connect (mapStateToProps, { getPeople }) (PeopleListContainer);
