import React from "react";
import { selectPerson } from '../actions/people';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
// import PersonGifts from './containers/PersonGifts';

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




// import React, { Component } from "react";
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';
// import { selectPerson } from '../actions/people';
// import { getPeople } from '../actions/people';
//
// class PeopleList extends Component {
//   componentDidMount() {
//     this.props.getPeople();
//   }
//   createListItems () {
//     return this.props.people.map((person) =>{
//       return(
//         <li
//           key={person.id}
//           onClick={() => this.props.selectPerson(person)}
//         >
//           {person.name}
//         </li>
//       );
//     });
//   }
//   render() {
//     return(
//       <ul>
//         {this.createListItems()}
//       </ul>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   console.log("I am state", state)
//   return{
//     people: state.peopleReducer.people,
//   }
// }
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({selectPerson: selectPerson}, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
