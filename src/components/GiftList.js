import React from 'react'
import PropTypes from 'prop-types'
import Gift from './Gift'

const GiftList = ({ gifts, toggleGift }) => (
  <ul>
    {gifts.map(gift => (
      <Gift key={gift.id} {...gift} onClick={() => toggleGift(gift.id)} />
    ))}
  </ul>
)

GiftList.propTypes = {
  gifts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      given: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleGift: PropTypes.func.isRequired
}

export default GiftList
