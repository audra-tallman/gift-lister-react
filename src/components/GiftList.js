import React from 'react'
// import PropTypes from 'prop-types'
// import Gift from './Gift'

// const GiftList = ({ gifts, toggleGift }) => (
//   <ul>
//     {gifts.map(gift => (
//       <Gift key={gift.id} {...gift} onClick={() => toggleGift(gift.id)} />
//     ))}
//   </ul>
// )
//
// GiftList.propTypes = {
//   gifts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       given: PropTypes.bool.isRequired,
//       description: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   toggleGift: PropTypes.func.isRequired
// }

const GiftList = (props) =>
<ul>
  {props.gifts.map(gift => (
    <h2 key={gift.id} onClick= {props.onClick}
    style={{
      textDecoration: gift.given ? 'line-through' : 'none'
    }}> ∆ {gift.description} (for {gift.person.name})</h2>
  ))}
</ul>

export default GiftList;
