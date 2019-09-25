import React from "react";
import { selectPerson } from '../actions/people';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const PeopleList = props =>
  <ul>
    {props.people.map(person => (
      <button key={person.id}
      onClick={() => props.selectPerson(person)}
      > {person.name}</button>
    ))}
  </ul>

  const mapStateToProps = (state) => {
    console.log("I am state", state)
    return{
      people: state.peopleReducer.people
    }
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({selectPerson: selectPerson}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
