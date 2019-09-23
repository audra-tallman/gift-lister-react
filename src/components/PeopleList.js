import React from "react";

const PeopleList = props =>
  <ul>
    {props.people.map(person => (
      <h2>{person.name}</h2>
    ))}
</ul>

export default PeopleList;
