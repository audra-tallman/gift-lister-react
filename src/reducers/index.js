import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import giftReducer from './giftReducer';
import visibilityFilter from './visibilityFilter';
import selectedPersonReducer from './selectedPersonReducer';

const rootReducer = combineReducers({
  peopleReducer,
  giftReducer,
  visibilityFilter,
  selectedPersonReducer,
})

export default rootReducer;
