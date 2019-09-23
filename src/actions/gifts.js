export const getGifts = () => {
  return(dispatch) => {
    dispatch({type: 'LOADING_GIFTS'})
    return fetch('/gifts')
    .then(resp => resp.json())
    .then(gifts => dispatch({type: 'FETCH_ALL_GIFTS', payload: gifts}))
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleGift = id => ({
  type: 'TOGGLE_GIVEN',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_GIVEN: 'SHOW_GIVEN',
  SHOW_TO_GIVE: 'SHOW_TO_GIVE'
}

export const addGift = (gift) => {
  return(dispatch) => {
    dispatch({type: 'ADD_GIFT'}, gift)
    return fetch('/gifts', {
      method: 'POST',
      body: JSON.stringify(gift),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(gift => dispatch({type: 'GIFT_ADDED', payload: gift}))
  }
}
