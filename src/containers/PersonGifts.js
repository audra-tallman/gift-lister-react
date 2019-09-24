import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {selectPerson} from '../actions/people';
import GiftForm from '../containers/GiftForm';
import { getPeople } from '../actions/people';


class PersonGifts extends Component {

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    return(
      <div>

        <GiftForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return{
    people: state.peopleReducer.people,
  }
}

export default connect(mapStateToProps, {getPeople})(PersonGifts);

// <h2>{this.props.person.name}</h2>
// <h3>{this.props.person.birthday}</h3>
// <GiftForm person={this.props.person}/>


  // componentDidMount() {
  //   this.props.getPeople()
  // }

// createGiftList() {
//   return this.props.person.gifts.map((gift) => {
//     return (
//       <li key={gift.id}>{gift.description}</li>
//     );
//   });
// }

//   render() {
//     console.log(this.props)
//     return(
//       <div>
//       {this.props.person &&
//       <>
//       <h3>These are the gift ideas for...</h3>
//         <h2>{this.props.person.name}</h2>
//         {this.props.gifts.map((gift) => {
//             return (
//               <li key={gift.id}>{gift.description}</li>
//             );
//           })}
//         <hr/>
//         <GiftForm person={this.props.person}/>
//       </>
//       }
//       </div>
//     );
//   }
// }
//
// function mapStateToProps(state, {match}) {
//   console.log(state)
//   return{
//     person: state.person.find(({name})=>name===match.params.id),
//     gifts: state.gifts.filter(({personId})=>personId===match.params.id)
//   }
// }
//
// export default connect(mapStateToProps, { selectPerson, getPeople } )(PersonGifts);
