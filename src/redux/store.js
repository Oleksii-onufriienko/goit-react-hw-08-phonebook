import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './dataSlice';
import { filterReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    contactsData: contactReducer,
    filter: filterReducer,
  },
});

export default store;
