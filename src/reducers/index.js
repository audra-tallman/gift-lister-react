import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import giftReducer from './giftReducer';

const rootReducer = combineReducers({
  peopleReducer,
  giftReducer
})

export default rootReducer;
