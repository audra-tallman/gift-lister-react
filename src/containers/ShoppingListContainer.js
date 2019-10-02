import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGifts } from '../actions/gifts';
import GiftList from '../components/GiftList';

class ShoppingListContainer extends Component {
  constructor() {
    super();
    this.state = { gifts: [] };
  }

  componentDidMount() {
    console.log("getting gifts")
    this.props.getGifts();
  }

  render() {
    return (
      <div>
        <h1>Gifts on your List:</h1>
        {this.props.loading ? <h2> Loading...</h2> : <GiftList gifts= {this.props.gifts} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log("I am Shopping List state", state)
  return {
    gifts: state.giftReducer.gifts,
    loading: state.giftReducer.loading,
    people: state.peopleReducer.people
  }
}
export default connect (mapStateToProps, { getGifts }) (ShoppingListContainer);
