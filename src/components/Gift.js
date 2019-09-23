import React from 'react'
import PropTypes from 'prop-types'


const Gift = ({ onClick, given, description }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: given ? 'line-through' : 'none'
    }}
  >
    {description}
  </li>
)

Gift.propTypes = {
  onClick: PropTypes.func.isRequired,
  given: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
}

export default Gift;
