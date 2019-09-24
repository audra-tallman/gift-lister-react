export default (state = null, action) => {
  switch(action.type) {
    case 'PERSON_SELECTED':
      return {
        person: action.payload
      }
  default:
  return state;
  }
}
