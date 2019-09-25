import React from 'react'
import { connect } from 'react-redux';

const GiftList = (props) =>
<ul>
  {props.gifts.map(gift => (
    <h2 key={gift.id}> ∆ {gift.description} (for {gift.person.name})</h2>
  ))}
</ul>

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return{
    gifts: state.giftReducer.gifts
  }
}


export default connect(mapStateToProps)(GiftList);
