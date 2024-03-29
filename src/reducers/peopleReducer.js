export default (state = {people:[],
  loading: false}, action) => {
    switch(action.type) {
      case 'LOADING_PEOPLE':
        return{
          ...state,
          loading: true
        }
      case 'FETCH_PEOPLE':
        return{
          people: action.payload,
          loading: false
        }
      case 'ADD_PERSON':
        return{
          ...state,
          loading: true
      }
      case 'PERSON_ADDED':
        return{
          people:[...state.people, action.payload],
          loading: false
        }
      default:
      return state;
    }
  }
