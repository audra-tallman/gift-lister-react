export const getPeople = () => {
  return(dispatch) => {
    dispatch({type: 'LOADING_PEOPLE'})
    return fetch('/people')
    .then(resp => resp.json())
    .then(people => dispatch({type: 'FETCH_PEOPLE', payload: people}))
  }
}
