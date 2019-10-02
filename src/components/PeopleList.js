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

  function mapDispatchToProps(dispatch){
    return bindActionCreators({selectPerson: selectPerson}, dispatch)
  }

  export default connect(null, mapDispatchToProps)(PeopleList);
