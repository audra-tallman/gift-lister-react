import React from 'react'
import { connect } from 'react-redux'
import { addGift } from '../actions/gifts'

const GiftForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addGift(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Gift</button>
      </form>
    </div>
  )
}

export default connect()(GiftForm)
