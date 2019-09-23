import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGifts } from '../actions/gifts';
// import GiftForm from './GiftForm';
// import ShoppingList from '../components/ShoppingList';
import GiftList from '../components/GiftList';

class ShoppingListContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = { gifts: [] };
  // }

  componentDidMount() {
    this.props.getGifts();
  }

  // render() {
  //   debugger
  //   return(
  //     <div>
  //       <h1> Gifts on your list: </h1>
  //       <ShoppingList gifts={this.props.gifts}/>
  //       <hr/>
  //       <h2> Add a Gift to your list...</h2>
  //       <GiftForm />
  //     </div>
  //   )}
  // }

  render() {

    // const gifts = this.props.gifts.map((gift, i) =>
    //   <ul key={i}><li>{gift.description} - {gift.person.name} - {gift.given ? "given" : "not given"}</li>
    //   </ul>)
    return (
      <div>
        <h1>Gifts on your List:</h1>
        <GiftList gifts={this.props.gifts}/>
      </div>
    );
  }
}
// <ul>{this.props.loading ? <h2>Loading...</h2> : gifts}</ul>
const mapStateToProps = (state) => {
  console.log("I am state", state)
  return {
    gifts: state.giftReducer.gifts,
    loading: state.giftReducer.loading
  }
}
export default connect (mapStateToProps, { getGifts }) (ShoppingListContainer);
