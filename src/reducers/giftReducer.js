export default (state = {gifts:[],
  loading: false}, action) => {
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
          ...state,
          gifts:[...state.gifts, action.payload],
          loading: false
        }
      case 'TOGGLE_GIVEN':
        return state.map(gift =>
          gift.id === action.id ? { ...gift, given: !gift.given } : gift
       )
      case 'ADD_GIFT_TO_PERSON':
        console.log(action.id)
        const gift = {
          description: action.payload.description,
          given: false,
          id: state.gifts.length+1,
          personId: action.id
        }
        return {gifts:[...state.gifts, gift], loading: state.loading}
      case 'FETCH_GIFTS':
        return{
          gifts: action.payload,
          loading:false
        }
      default:
      return state;
    }
  }
