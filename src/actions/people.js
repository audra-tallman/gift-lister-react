export const getPeople = () => {
  return(dispatch) => {
    dispatch({type: 'LOADING_PEOPLE'})
    return fetch('/people')
    .then(resp => resp.json())
    .then(people => dispatch({type: 'FETCH_PEOPLE', payload: people}))
  }
}

export const addPerson = (person) => {
  return(dispatch) => {
    dispatch({type: 'ADD_PERSON'}, person)
    return fetch('/people', {
      method: 'POST',
      body: JSON.stringify(person),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(person => dispatch({type: 'PERSON_ADDED', payload: person}))
  }
}

export const selectPerson = (person) => {
  console.log("You clicked on", person.name);
  return{
    type: "PERSON_SELECTED",
    payload: person
  }
}

export const addGift = (gift, id) => {
console.log(gift)
  return(dispatch) =>{
    dispatch({
      type: 'ADD_GIFT_TO_PERSON',
      payload: gift,
      id
    })
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
