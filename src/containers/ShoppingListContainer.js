import React, { Component } from 'react';
import { getGifts } from '../actions/gifts';
import { connect } from 'react-redux';
import ShoppingList from '../components/ShoppingList';

class ShoppingListContainer extends Component {
  constructor() {
    super();
    this.state = { gifts: [] };
  }

  componentDidMount() {
    this.props.getGifts()
  }


  render() {
    return(
      <div>
        <h1> Gifts on your list: </h1>
        <ShoppingList gifts={this.props.gifts}/>
      </div>
    )}
  }

//   render() {
//     const gifts = this.props.gifts.map((gift, i) =>
//       <ul key={i}>{gift.description} - {gift.person.name} - {gift.given ? "given" : "not given"}</ul>)
//     return (
//       <div>
//           <h1>Gifts on your List</h1>
//             <div className="container">
//             </div>
//           <ul>{this.props.loading ? <h2>Loading...</h2> : gifts}</ul>
//           < CheckList />
//       </div>
//     );
//   }
// }
const mapStateToProps = (state) => {
  console.log("I am state", state)
  return {
    gifts: state.giftReducer.gifts,
    loading: state.giftReducer.loading
  }
}
export default connect(mapStateToProps, { getGifts }) (ShoppingListContainer);
