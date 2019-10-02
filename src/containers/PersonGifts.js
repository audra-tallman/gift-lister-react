import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectPerson} from '../actions/people';
import GiftForm from '../containers/GiftForm';
import { getPeople } from '../actions/people';
import { getPersonGifts } from '../actions/gifts';
import { get } from 'dot-prop';

class PersonGifts extends Component {

  createGiftList() {
    return this.props.person.gifts.map((gift) => {
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
  return{
    person: state.peopleReducer.people.find(p=> personId===p.id),
    gifts: state.giftReducer.gifts
  }
}

export default connect (mapStateToProps, { getPeople, getPersonGifts, selectPerson })(PersonGifts);
