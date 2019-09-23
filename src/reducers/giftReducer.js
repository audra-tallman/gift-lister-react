export default (state = [], action ) => {
    switch(action.type) {
      case 'LOADING_GIFTS':
        return{
          ...state,
          loading: true
        }
      case 'ADD_GIFT':
        return{
          ...state,
          loading: true
      }
      case 'GIFT_ADDED':
        return{
          gifts:[...state.gifts, action.payload],
          loading: false
        }
      case 'ADD_GIFT_TO_PERSON':
        console.log("Adding gift")
        const gift = {
          description: action.payload.description,
          given: false,
          id: state.length+1,
          personId: action.id
        }
        return [...state, gift]
      case 'FETCH_GIFTS':
        return [...action.payload]
      default:
      return state;
    }
  }
