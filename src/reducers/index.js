import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import giftReducer from './giftReducer';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  peopleReducer,
  giftReducer,
  visibilityFilter
})

export default rootReducer;
