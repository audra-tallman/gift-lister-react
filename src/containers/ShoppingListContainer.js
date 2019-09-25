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
    this.props.getGifts();
  }

  render() {
    return (
      <div>
        <h1>Gifts on your List:</h1>
        <GiftList gifts={this.props.gifts}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return {
    gifts: state.giftReducer.gifts
  }
}
export default connect (mapStateToProps, { getGifts }) (ShoppingListContainer);
