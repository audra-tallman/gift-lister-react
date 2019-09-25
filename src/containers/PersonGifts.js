import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectPerson} from '../actions/people';
import GiftForm from '../containers/GiftForm';
import { getPeople } from '../actions/people';
import { getPersonGifts } from '../actions/gifts';
import { get } from 'dot-prop';

class PersonGifts extends Component {

  componentDidMount() {
    this.props.getPeople();
    this.props.getPersonGifts();
  }

  createGiftList() {
    return this.props.gifts.map((gift) => {
      return (
        <li key={gift.id}>{gift.description}</li>
      );
    });
  }

  render() {
    return(
      <div>
      <ul> {this.createGiftList()} </ul>
      <GiftForm personId={this.props.person} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("I am PersonGifts state", state)
const personId = get(state, 'selectedPersonReducer.person.id', '')
const gifts = get(state, 'giftReducer.gifts', [])
  console.log(gifts)
  return{
    person: state.selectedPersonReducer ? state.selectedPersonReducer.person.id : [],
    gifts: gifts.filter((g) => g.personId===personId)
  }
}

export default connect (mapStateToProps, { getPeople, getPersonGifts, selectPerson })(PersonGifts);

//   render() {
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

//   render() {
//     return(
//       <div>
//
//         <GiftForm />
//       </div>
//     );
//   }
// }

// export default connect(mapStateToProps, {getPeople})(PersonGifts);

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
