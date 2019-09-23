export default (state = [], action ) => {
    switch(action.type) {
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
