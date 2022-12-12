import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './dataSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contactsData: persistReducer(contactsPersistConfig, contactReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStor = persistStore(store);
export default store;
