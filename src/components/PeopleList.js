import React from "react";
import { Link } from 'react-router-dom';

const PeopleList = props =>
  <ul>
    {props.people.map(person => (
      <h2 key={person.id}><Link to={`/people/${person.name}`}> {person.name} </Link> </h2>
    ))}
</ul>

export default PeopleList;
