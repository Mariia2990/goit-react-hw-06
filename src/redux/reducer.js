import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export default rootReducer;